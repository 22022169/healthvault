import { useNavigate } from "@tanstack/react-router";
import {
  AlertCircle,
  CheckCircle2,
  File,
  FileText,
  ImageIcon,
  RefreshCcw,
  Shield,
  Trash2,
  Upload as UploadIcon,
  X,
} from "lucide-react";
import { useCallback, useRef, useState } from "react";
import { ExternalBlob } from "../backend";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Progress } from "../components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Textarea } from "../components/ui/textarea";
import { useMutateRecord, useUploadFile } from "../hooks/useBackend";
import { FILE_TYPE_LABELS, FileType } from "../types/index";

const FILE_TYPES = Object.values(FileType);

const ACCEPTED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];
const ACCEPTED_EXT = ".pdf,.jpg,.jpeg,.png,.docx";
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;

interface FileEntry {
  file: File;
  id: string;
}

interface UploadFormState {
  fileType: FileType | "";
  doctorName: string;
  hospitalName: string;
  visitDate: string;
  notes: string;
}

const INITIAL_FORM: UploadFormState = {
  fileType: "",
  doctorName: "",
  hospitalName: "",
  visitDate: "",
  notes: "",
};

function fileIcon(mimeType: string) {
  if (mimeType.startsWith("image/"))
    return <ImageIcon className="w-5 h-5 text-accent" />;
  if (mimeType === "application/pdf")
    return <FileText className="w-5 h-5 text-primary" />;
  return <File className="w-5 h-5 text-muted-foreground" />;
}

function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

type UploadPhase = "idle" | "uploading" | "saving" | "success" | "error";

export default function Upload() {
  const navigate = useNavigate();
  const { createRecord } = useMutateRecord();
  const uploadFile = useUploadFile();

  const [files, setFiles] = useState<FileEntry[]>([]);
  const [form, setForm] = useState<UploadFormState>(INITIAL_FORM);
  const [isDragging, setIsDragging] = useState(false);
  const [phase, setPhase] = useState<UploadPhase>("idle");
  const [progress, setProgress] = useState(0);
  const [errorMsg, setErrorMsg] = useState("");
  const [validationError, setValidationError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((incoming: File[]) => {
    const valid: FileEntry[] = [];
    for (const f of incoming) {
      if (!ACCEPTED_TYPES.includes(f.type)) {
        continue;
      }
      if (f.size > MAX_SIZE_BYTES) {
        continue;
      }
      valid.push({ file: f, id: `${f.name}-${f.size}-${Date.now()}` });
    }
    setFiles((prev) => {
      const existing = new Set(
        prev.map((e) => `${e.file.name}-${e.file.size}`),
      );
      return [
        ...prev,
        ...valid.filter((v) => !existing.has(`${v.file.name}-${v.file.size}`)),
      ];
    });
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      addFiles(Array.from(e.dataTransfer.files));
    },
    [addFiles],
  );

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => setIsDragging(false);

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
    e.target.value = "";
  };

  const removeFile = (id: string) =>
    setFiles((prev) => prev.filter((f) => f.id !== id));

  const isValid =
    files.length > 0 &&
    form.fileType &&
    form.doctorName.trim() &&
    form.hospitalName.trim() &&
    form.visitDate;

  const handleUpload = async () => {
    if (!isValid) {
      if (files.length === 0)
        setValidationError("Please add at least one file.");
      else setValidationError("Please fill in all required fields.");
      return;
    }
    setValidationError("");
    setPhase("uploading");
    setProgress(0);
    setErrorMsg("");

    try {
      for (let i = 0; i < files.length; i++) {
        const entry = files[i];
        const fileBytes = new Uint8Array(await entry.file.arrayBuffer());

        const blob = ExternalBlob.fromBytes(fileBytes).withUploadProgress(
          (pct) => {
            const base = (i / files.length) * 100;
            setProgress(Math.round(base + pct / files.length));
          },
        );

        // Upload the file to object storage and get back the storage key
        const keyBytes = await uploadFile(blob);
        const fileKey = new TextDecoder().decode(keyBytes);

        setPhase("saving");

        await createRecord.mutateAsync({
          fileName: entry.file.name,
          fileType: form.fileType as FileType,
          doctorName: form.doctorName.trim(),
          hospitalName: form.hospitalName.trim(),
          visitDate: form.visitDate,
          notes: form.notes.trim() || undefined,
          fileKey,
          fileSize: BigInt(entry.file.size),
        });
      }

      setPhase("success");
      setProgress(100);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : "Upload failed. Please try again.";
      setErrorMsg(msg);
      setPhase("error");
    }
  };

  const resetAll = () => {
    setFiles([]);
    setForm(INITIAL_FORM);
    setPhase("idle");
    setProgress(0);
    setErrorMsg("");
    setValidationError("");
  };

  // ─── Success Screen ───────────────────────────────────────────────────────
  if (phase === "success") {
    return (
      <div
        className="max-w-lg mx-auto px-4 sm:px-6 py-16 text-center"
        data-ocid="upload.success_state"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 ring-4 ring-accent/20">
          <CheckCircle2 className="w-10 h-10 text-accent" />
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Record uploaded successfully!
        </h2>
        <p className="text-muted-foreground mb-8">
          Your medical document has been securely stored in your HealthVault.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            type="button"
            variant="outline"
            className="gap-2"
            onClick={resetAll}
            data-ocid="upload.upload_another_button"
          >
            <UploadIcon className="w-4 h-4" />
            Upload Another
          </Button>
          <Button
            type="button"
            className="gap-2"
            onClick={() => navigate({ to: "/history" })}
            data-ocid="upload.view_history_button"
          >
            View in History
          </Button>
        </div>
      </div>
    );
  }

  const isUploading = phase === "uploading" || phase === "saving";

  return (
    <div
      className="max-w-6xl mx-auto px-4 sm:px-6 py-8"
      data-ocid="upload.page"
    >
      {/* Header */}
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground">
          Upload Medical Record
        </h1>
        <p className="text-muted-foreground mt-1">
          Add documents to your secure encrypted vault
        </p>
      </div>

      {/* Two-column layout on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* ── Left: Drop Zone + File List ─────────────────────────────────── */}
        <div className="flex flex-col gap-4">
          {/* Drop zone */}
          <button
            type="button"
            aria-label="Upload file area — click or drag files here"
            className={[
              "relative w-full rounded-xl border-2 border-dashed p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-smooth min-h-[220px]",
              isDragging
                ? "border-primary bg-primary/5 scale-[1.01]"
                : "border-border hover:border-primary/50 hover:bg-muted/40",
            ].join(" ")}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={() => inputRef.current?.click()}
            data-ocid="upload.dropzone"
          >
            <input
              ref={inputRef}
              type="file"
              multiple
              accept={ACCEPTED_EXT}
              className="sr-only"
              onChange={handleFileInput}
              data-ocid="upload.file_input"
            />

            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <UploadIcon className="w-7 h-7 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-medium text-foreground">
                {isDragging ? "Drop files here" : "Drag & drop files"}
              </p>
              <p className="text-sm text-muted-foreground mt-0.5">
                or{" "}
                <span className="text-primary font-medium underline-offset-2 hover:underline">
                  browse to upload
                </span>
              </p>
            </div>
            <p className="text-xs text-muted-foreground">
              PDF, JPG, PNG, DOCX · max {MAX_SIZE_MB} MB each
            </p>
          </button>

          {/* File list */}
          {files.length > 0 && (
            <Card
              className="border-border shadow-card"
              data-ocid="upload.file_list"
            >
              <CardContent className="p-0 divide-y divide-border">
                {files.map((entry, idx) => (
                  <div
                    key={entry.id}
                    className="flex items-center gap-3 px-4 py-3"
                    data-ocid={`upload.file.item.${idx + 1}`}
                  >
                    <div className="shrink-0">{fileIcon(entry.file.type)}</div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">
                        {entry.file.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {formatBytes(entry.file.size)}
                      </p>
                    </div>
                    <button
                      type="button"
                      aria-label={`Remove ${entry.file.name}`}
                      className="shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth"
                      onClick={() => removeFile(entry.id)}
                      disabled={isUploading}
                      data-ocid={`upload.remove_file_button.${idx + 1}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Progress */}
          {isUploading && (
            <Card
              className="border-border shadow-card"
              data-ocid="upload.loading_state"
            >
              <CardContent className="p-4 space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-foreground font-medium">
                    {phase === "saving" ? "Saving record…" : "Uploading file…"}
                  </span>
                  <span className="text-muted-foreground tabular-nums">
                    {progress}%
                  </span>
                </div>
                <Progress value={progress} className="h-2" />
                <p className="text-xs text-muted-foreground">
                  {phase === "saving"
                    ? "Storing metadata securely"
                    : "Encrypting and uploading to vault"}
                </p>
              </CardContent>
            </Card>
          )}

          {/* Security badge */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground px-1">
            <Shield className="w-3.5 h-3.5 text-accent shrink-0" />
            <span>Files are encrypted end-to-end and stored securely</span>
          </div>
        </div>

        {/* ── Right: Metadata Form ─────────────────────────────────────────── */}
        <Card className="border-border shadow-card">
          <CardHeader className="pb-4">
            <CardTitle className="text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-primary" />
              Record Details
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-5">
              {/* Document Type */}
              <div className="space-y-1.5">
                <Label>
                  Document Type <span className="text-destructive">*</span>
                </Label>
                <Select
                  value={form.fileType}
                  onValueChange={(v) =>
                    setForm({ ...form, fileType: v as FileType })
                  }
                  disabled={isUploading}
                >
                  <SelectTrigger data-ocid="upload.file_type.select">
                    <SelectValue placeholder="Select document type" />
                  </SelectTrigger>
                  <SelectContent>
                    {FILE_TYPES.map((ft) => (
                      <SelectItem key={ft} value={ft}>
                        {FILE_TYPE_LABELS[ft]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Doctor + Hospital */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <Label htmlFor="doctorName">
                    Doctor Name <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="doctorName"
                    placeholder="Dr. Sarah Patel"
                    value={form.doctorName}
                    onChange={(e) =>
                      setForm({ ...form, doctorName: e.target.value })
                    }
                    disabled={isUploading}
                    data-ocid="upload.doctor_name.input"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="hospitalName">
                    Hospital / Clinic{" "}
                    <span className="text-destructive">*</span>
                  </Label>
                  <Input
                    id="hospitalName"
                    placeholder="City Medical Center"
                    value={form.hospitalName}
                    onChange={(e) =>
                      setForm({ ...form, hospitalName: e.target.value })
                    }
                    disabled={isUploading}
                    data-ocid="upload.hospital_name.input"
                  />
                </div>
              </div>

              {/* Visit Date */}
              <div className="space-y-1.5">
                <Label htmlFor="visitDate">
                  Visit Date <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="visitDate"
                  type="date"
                  value={form.visitDate}
                  onChange={(e) =>
                    setForm({ ...form, visitDate: e.target.value })
                  }
                  disabled={isUploading}
                  data-ocid="upload.visit_date.input"
                />
              </div>

              {/* Notes */}
              <div className="space-y-1.5">
                <Label htmlFor="notes">Notes (optional)</Label>
                <Textarea
                  id="notes"
                  placeholder="Additional context, symptoms, or instructions…"
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  rows={3}
                  disabled={isUploading}
                  data-ocid="upload.notes.textarea"
                />
              </div>

              {/* Validation error */}
              {validationError && (
                <div
                  className="flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2"
                  data-ocid="upload.field_error"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {validationError}
                </div>
              )}

              {/* Error state */}
              {phase === "error" && (
                <div
                  className="flex items-start gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2"
                  data-ocid="upload.error_state"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium">Upload failed</p>
                    {errorMsg && (
                      <p className="text-xs mt-0.5 opacity-80">{errorMsg}</p>
                    )}
                  </div>
                  <button
                    type="button"
                    className="shrink-0 p-1 rounded hover:bg-destructive/10 transition-smooth"
                    onClick={() => setPhase("idle")}
                    aria-label="Dismiss error"
                    data-ocid="upload.error_dismiss_button"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              )}

              {/* Submit */}
              <div className="flex flex-col gap-2 pt-1">
                <Button
                  type="button"
                  className="w-full gap-2"
                  size="lg"
                  disabled={isUploading || (!isValid && phase !== "error")}
                  onClick={handleUpload}
                  data-ocid="upload.submit_button"
                >
                  {phase === "saving" ? (
                    <>
                      <span className="inline-block w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Saving record…
                    </>
                  ) : phase === "uploading" ? (
                    <>
                      <span className="inline-block w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" />
                      Uploading… {progress}%
                    </>
                  ) : phase === "error" ? (
                    <>
                      <RefreshCcw className="w-4 h-4" />
                      Retry Upload
                    </>
                  ) : (
                    <>
                      <UploadIcon className="w-4 h-4" />
                      Save to Health Vault
                    </>
                  )}
                </Button>

                {(files.length > 0 || form.doctorName) && !isUploading && (
                  <Button
                    type="button"
                    variant="ghost"
                    className="w-full gap-2 text-muted-foreground"
                    onClick={resetAll}
                    data-ocid="upload.clear_button"
                  >
                    <Trash2 className="w-4 h-4" />
                    Clear all
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
