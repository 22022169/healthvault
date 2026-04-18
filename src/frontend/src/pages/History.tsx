import {
  AlertCircle,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  Download,
  FileText,
  Filter,
  History as HistoryIcon,
  LayoutList,
  Search,
  Trash2,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { RecordCard } from "../components/RecordCard";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Skeleton } from "../components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../components/ui/tooltip";
import { useMutateRecord, useRecords } from "../hooks/useBackend";
import type { MedicalRecord } from "../types/index";
import { FILE_TYPE_COLORS, FILE_TYPE_LABELS, FileType } from "../types/index";

// ─── Constants ───────────────────────────────────────────────────────────────

const ALL = "all";

type SortOption = "newest" | "oldest" | "name_asc" | "doctor_asc";

type ViewMode = "table" | "timeline";

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatFileSize(bytes: bigint): string {
  const n = Number(bytes);
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function getMonthYear(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
    });
  } catch {
    return dateStr;
  }
}

function getDownloadUrl(fileKey: string): string {
  // Construct storage gateway URL from fileKey
  const storageBase =
    typeof window !== "undefined"
      ? `${window.location.origin}/storage`
      : "/storage";
  return `${storageBase}/${encodeURIComponent(fileKey)}`;
}

function sortRecords(
  records: MedicalRecord[],
  sort: SortOption,
): MedicalRecord[] {
  return [...records].sort((a, b) => {
    if (sort === "newest")
      return new Date(b.visitDate).getTime() - new Date(a.visitDate).getTime();
    if (sort === "oldest")
      return new Date(a.visitDate).getTime() - new Date(b.visitDate).getTime();
    if (sort === "name_asc") return a.fileName.localeCompare(b.fileName);
    if (sort === "doctor_asc") return a.doctorName.localeCompare(b.doctorName);
    return 0;
  });
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function FileTypeBadge({ fileType }: { fileType: FileType | string }) {
  const key = fileType as FileType;
  const label = FILE_TYPE_LABELS[key] ?? fileType;
  const colors = FILE_TYPE_COLORS[key] ?? FILE_TYPE_COLORS[FileType.Other];
  return (
    <Badge
      variant="outline"
      className={`text-xs whitespace-nowrap ${colors.bg} ${colors.text} ${colors.border} border`}
    >
      {label}
    </Badge>
  );
}

function DeleteButton({
  record,
  index,
  onConfirm,
  isPending,
}: {
  record: MedicalRecord;
  index: number;
  onConfirm: (id: bigint) => void;
  isPending: boolean;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          type="button"
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth"
          aria-label="Delete record"
          data-ocid={`history.delete_button.${index}`}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent data-ocid="history.dialog">
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this record?</AlertDialogTitle>
          <AlertDialogDescription>
            <strong>{record.fileName}</strong> will be permanently removed. This
            action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel data-ocid="history.cancel_button">
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={() => onConfirm(record.id)}
            disabled={isPending}
            className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            data-ocid="history.confirm_button"
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

// ─── Table View ──────────────────────────────────────────────────────────────

function TableView({
  records,
  onDelete,
  isPending,
}: {
  records: MedicalRecord[];
  onDelete: (id: bigint) => void;
  isPending: boolean;
}) {
  return (
    <div className="rounded-lg border border-border overflow-hidden">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/40 hover:bg-muted/40">
              <TableHead className="min-w-[180px]">File Name</TableHead>
              <TableHead className="min-w-[120px]">Type</TableHead>
              <TableHead className="min-w-[140px]">Doctor</TableHead>
              <TableHead className="min-w-[140px]">Hospital</TableHead>
              <TableHead className="min-w-[110px]">Visit Date</TableHead>
              <TableHead className="min-w-[80px] text-right">Size</TableHead>
              <TableHead className="min-w-[80px] text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {records.map((record, i) => (
              <TableRow
                key={record.id.toString()}
                className="hover:bg-muted/20 transition-smooth"
                data-ocid={`history.item.${i + 1}`}
              >
                {/* File Name */}
                <TableCell className="font-medium">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div className="flex items-center gap-2 max-w-[180px]">
                          <FileText className="w-4 h-4 shrink-0 text-primary/60" />
                          <span className="truncate text-foreground">
                            {record.fileName}
                          </span>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{record.fileName}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </TableCell>

                {/* Type */}
                <TableCell>
                  <FileTypeBadge fileType={record.fileType} />
                </TableCell>

                {/* Doctor */}
                <TableCell>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground max-w-[140px]">
                    <User className="w-3.5 h-3.5 shrink-0 text-primary/60" />
                    <span className="truncate">{record.doctorName}</span>
                  </div>
                </TableCell>

                {/* Hospital */}
                <TableCell>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground max-w-[140px]">
                    <Building2 className="w-3.5 h-3.5 shrink-0 text-primary/60" />
                    <span className="truncate">{record.hospitalName}</span>
                  </div>
                </TableCell>

                {/* Visit Date */}
                <TableCell>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground whitespace-nowrap">
                    <Calendar className="w-3.5 h-3.5 shrink-0 text-primary/60" />
                    {formatDate(record.visitDate)}
                  </div>
                </TableCell>

                {/* Size */}
                <TableCell className="text-right text-sm text-muted-foreground font-mono tabular-nums">
                  {formatFileSize(record.fileSize)}
                </TableCell>

                {/* Actions */}
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="text-muted-foreground hover:text-primary hover:bg-primary/10 transition-smooth"
                      aria-label="Download record"
                      data-ocid={`history.download_button.${i + 1}`}
                      asChild
                    >
                      <a
                        href={getDownloadUrl(record.fileKey)}
                        download={record.fileName}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </Button>
                    <DeleteButton
                      record={record}
                      index={i + 1}
                      onConfirm={onDelete}
                      isPending={isPending}
                    />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

// ─── Timeline View ────────────────────────────────────────────────────────────

function TimelineView({
  records,
  onDelete,
  isPending,
}: {
  records: MedicalRecord[];
  onDelete: (id: bigint) => void;
  isPending: boolean;
}) {
  // Group by month+year (sorted newest first)
  const groups = useMemo(() => {
    const map = new Map<string, MedicalRecord[]>();
    for (const r of records) {
      const key = getMonthYear(r.visitDate);
      if (!map.has(key)) map.set(key, []);
      map.get(key)!.push(r);
    }
    // Sort group keys newest first
    return Array.from(map.entries()).sort(([a], [b]) => {
      const da = new Date(`${a} 1`).getTime();
      const db = new Date(`${b} 1`).getTime();
      return db - da;
    });
  }, [records]);

  const [collapsed, setCollapsed] = useState<Set<string>>(new Set());

  const toggleGroup = (key: string) => {
    setCollapsed((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // Build a flat index map for data-ocid numbering across all groups
  let globalIndex = 0;

  return (
    <div className="space-y-6">
      {groups.map(([monthYear, groupRecords]) => {
        const isOpen = !collapsed.has(monthYear);
        return (
          <div key={monthYear} className="relative pl-4 sm:pl-6">
            {/* Left accent border */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-primary/20 rounded-full" />

            {/* Month header */}
            <button
              type="button"
              onClick={() => toggleGroup(monthYear)}
              className="flex items-center gap-2 mb-3 group w-full text-left"
              data-ocid="history.timeline_group.toggle"
            >
              <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <span className="font-semibold text-sm text-foreground uppercase tracking-wide pl-1">
                {monthYear}
              </span>
              <Badge variant="outline" className="text-xs">
                {groupRecords.length}
              </Badge>
              <span className="ml-auto text-muted-foreground group-hover:text-foreground transition-smooth">
                {isOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </span>
            </button>

            {/* Records */}
            {isOpen && (
              <div className="space-y-3">
                {groupRecords.map((record) => {
                  globalIndex++;
                  const idx = globalIndex;
                  return (
                    <RecordCard
                      key={record.id.toString()}
                      record={record}
                      index={idx}
                      onDelete={onDelete}
                      isDeleting={isPending}
                    />
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Loading Skeletons ────────────────────────────────────────────────────────

function TableSkeleton() {
  return (
    <div
      className="rounded-lg border border-border overflow-hidden"
      data-ocid="history.loading_state"
    >
      <div className="bg-muted/40 px-4 py-3 grid grid-cols-7 gap-4">
        {["File", "Type", "Doctor", "Hospital", "Date", "Size", "Actions"].map(
          (h) => (
            <Skeleton key={h} className="h-4" />
          ),
        )}
      </div>
      {["file", "type", "doctor", "hospital", "date", "size", "actions"].map(
        (col) => (
          <div
            key={col}
            className="px-4 py-4 grid grid-cols-7 gap-4 border-t border-border"
          >
            {["f", "t", "d", "h", "dt", "s", "a"].map((c) => (
              <Skeleton key={c} className="h-4" />
            ))}
          </div>
        ),
      )}
    </div>
  );
}

function TimelineSkeleton() {
  return (
    <div className="space-y-6" data-ocid="history.loading_state">
      {[1, 2].map((g) => (
        <div key={g} className="pl-6 relative">
          <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-muted rounded-full" />
          <div className="absolute -left-1.5 w-3 h-3 rounded-full bg-muted" />
          <Skeleton className="h-5 w-32 mb-3" />
          <div className="space-y-3">
            {[1, 2].map((i) => (
              <Skeleton key={i} className="h-28 w-full rounded-lg" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// ─── Empty State ──────────────────────────────────────────────────────────────

function EmptyState({ hasFilters }: { hasFilters: boolean }) {
  return (
    <div
      className="text-center py-20 bg-muted/20 rounded-xl border border-border border-dashed"
      data-ocid="history.empty_state"
    >
      {hasFilters ? (
        <>
          <AlertCircle className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="font-semibold text-foreground text-lg">
            No records match your filters
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Try adjusting your search or filter criteria
          </p>
        </>
      ) : (
        <>
          <HistoryIcon className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
          <p className="font-semibold text-foreground text-lg">
            No records yet
          </p>
          <p className="text-sm text-muted-foreground mt-1">
            Upload your first medical document to get started
          </p>
        </>
      )}
    </div>
  );
}

// ─── Main Page ────────────────────────────────────────────────────────────────

export default function History() {
  const { data: records, isLoading } = useRecords();
  const { deleteRecord } = useMutateRecord();

  // Filter state
  const [search, setSearch] = useState("");
  const [filterType, setFilterType] = useState<string>(ALL);
  const [filterDoctor, setFilterDoctor] = useState("");
  const [filterHospital, setFilterHospital] = useState("");
  const [sort, setSort] = useState<SortOption>("newest");
  const [view, setView] = useState<ViewMode>("table");

  // Autocomplete options derived from records
  const doctorOptions = useMemo(
    () => [...new Set((records ?? []).map((r) => r.doctorName))].sort(),
    [records],
  );
  const hospitalOptions = useMemo(
    () => [...new Set((records ?? []).map((r) => r.hospitalName))].sort(),
    [records],
  );

  const filtered = useMemo(() => {
    const raw = records ?? [];
    const q = search.toLowerCase();
    return raw.filter((r) => {
      const matchSearch =
        !q ||
        r.fileName.toLowerCase().includes(q) ||
        r.doctorName.toLowerCase().includes(q) ||
        r.hospitalName.toLowerCase().includes(q);
      const matchType =
        filterType === ALL || (r.fileType as string) === filterType;
      const matchDoctor =
        !filterDoctor ||
        r.doctorName.toLowerCase().includes(filterDoctor.toLowerCase());
      const matchHospital =
        !filterHospital ||
        r.hospitalName.toLowerCase().includes(filterHospital.toLowerCase());
      return matchSearch && matchType && matchDoctor && matchHospital;
    });
  }, [records, search, filterType, filterDoctor, filterHospital]);

  const sorted = useMemo(() => sortRecords(filtered, sort), [filtered, sort]);

  const hasFilters =
    !!search || filterType !== ALL || !!filterDoctor || !!filterHospital;

  const handleDelete = async (id: bigint) => {
    try {
      await deleteRecord.mutateAsync(id);
      toast.success("Record deleted successfully");
    } catch {
      toast.error("Failed to delete record");
    }
  };

  const clearFilters = () => {
    setSearch("");
    setFilterType(ALL);
    setFilterDoctor("");
    setFilterHospital("");
  };

  return (
    <TooltipProvider>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
        data-ocid="history.page"
      >
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                <HistoryIcon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-display text-2xl font-bold text-foreground">
                  Medical History
                </h1>
                <p className="text-sm text-muted-foreground">
                  All your uploaded medical records
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {records && records.length > 0 && (
              <Badge
                variant="secondary"
                className="text-sm px-3 py-1"
                data-ocid="history.record_count.badge"
              >
                {records.length} record{records.length !== 1 ? "s" : ""}
              </Badge>
            )}
            {/* View Toggle */}
            <div className="flex items-center gap-1 bg-muted rounded-lg p-1">
              <Button
                type="button"
                variant={view === "table" ? "default" : "ghost"}
                size="sm"
                className="h-7 px-2"
                onClick={() => setView("table")}
                aria-label="Table view"
                data-ocid="history.view_table.toggle"
              >
                <LayoutList className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant={view === "timeline" ? "default" : "ghost"}
                size="sm"
                className="h-7 px-2"
                onClick={() => setView("timeline")}
                aria-label="Timeline view"
                data-ocid="history.view_timeline.toggle"
              >
                <HistoryIcon className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Bar */}
        <div className="bg-card border border-border rounded-xl p-4 mb-6 shadow-card">
          <div className="flex flex-col gap-3">
            {/* Row 1: Search + Type + Sort */}
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search */}
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  placeholder="Search by file name, doctor, or hospital…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                  data-ocid="history.search_input"
                />
              </div>
              {/* Type Filter */}
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger
                  className="w-full sm:w-44"
                  data-ocid="history.type_filter.select"
                >
                  <Filter className="w-4 h-4 text-muted-foreground shrink-0 mr-1" />
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value={ALL}>All Types</SelectItem>
                  {Object.values(FileType).map((ft) => (
                    <SelectItem key={ft} value={ft}>
                      {FILE_TYPE_LABELS[ft]}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {/* Sort */}
              <Select
                value={sort}
                onValueChange={(v) => setSort(v as SortOption)}
              >
                <SelectTrigger
                  className="w-full sm:w-44"
                  data-ocid="history.sort.select"
                >
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="oldest">Oldest First</SelectItem>
                  <SelectItem value="name_asc">File Name A–Z</SelectItem>
                  <SelectItem value="doctor_asc">Doctor A–Z</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Row 2: Doctor + Hospital autocomplete */}
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  list="doctor-options"
                  placeholder="Filter by doctor name…"
                  value={filterDoctor}
                  onChange={(e) => setFilterDoctor(e.target.value)}
                  className="pl-9"
                  data-ocid="history.doctor_filter.input"
                />
                <datalist id="doctor-options">
                  {doctorOptions.map((d) => (
                    <option key={d} value={d} />
                  ))}
                </datalist>
              </div>
              <div className="relative flex-1">
                <Building2 className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                <Input
                  list="hospital-options"
                  placeholder="Filter by hospital…"
                  value={filterHospital}
                  onChange={(e) => setFilterHospital(e.target.value)}
                  className="pl-9"
                  data-ocid="history.hospital_filter.input"
                />
                <datalist id="hospital-options">
                  {hospitalOptions.map((h) => (
                    <option key={h} value={h} />
                  ))}
                </datalist>
              </div>
            </div>
          </div>

          {/* Active filter summary */}
          {hasFilters && (
            <div className="flex items-center justify-between mt-3 pt-3 border-t border-border">
              <span className="text-sm text-muted-foreground">
                Showing{" "}
                <strong className="text-foreground">{sorted.length}</strong> of{" "}
                <strong className="text-foreground">
                  {records?.length ?? 0}
                </strong>{" "}
                records
              </span>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={clearFilters}
                className="text-xs text-muted-foreground hover:text-foreground h-auto py-1"
                data-ocid="history.clear_filters.button"
              >
                Clear all filters
              </Button>
            </div>
          )}
        </div>

        {/* Content */}
        {isLoading ? (
          view === "table" ? (
            <TableSkeleton />
          ) : (
            <TimelineSkeleton />
          )
        ) : sorted.length === 0 ? (
          <EmptyState hasFilters={hasFilters} />
        ) : view === "table" ? (
          <TableView
            records={sorted}
            onDelete={handleDelete}
            isPending={deleteRecord.isPending}
          />
        ) : (
          <TimelineView
            records={sorted}
            onDelete={handleDelete}
            isPending={deleteRecord.isPending}
          />
        )}
      </div>
    </TooltipProvider>
  );
}
