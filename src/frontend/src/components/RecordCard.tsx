import { Building2, Calendar, FileText, Trash2, User } from "lucide-react";
import type { MedicalRecord } from "../backend.d.ts";
import { FILE_TYPE_COLORS, FILE_TYPE_LABELS, FileType } from "../types/index";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

interface RecordCardProps {
  record: MedicalRecord;
  index: number;
  onDelete?: (id: bigint) => void;
  isDeleting?: boolean;
}

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

export function RecordCard({
  record,
  index,
  onDelete,
  isDeleting,
}: RecordCardProps) {
  const fileTypeKey = record.fileType as unknown as FileType;
  const label = FILE_TYPE_LABELS[fileTypeKey] ?? record.fileType;
  const colors =
    FILE_TYPE_COLORS[fileTypeKey] ?? FILE_TYPE_COLORS[FileType.Other];

  return (
    <Card
      className="group hover:shadow-card transition-smooth border-border"
      data-ocid={`record.item.${index}`}
    >
      <CardContent className="p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-start gap-3 min-w-0 flex-1">
            <div
              className={`shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${colors.bg} ${colors.border} border`}
            >
              <FileText className={`w-5 h-5 ${colors.text}`} />
            </div>
            <div className="min-w-0 flex-1">
              <p
                className="font-semibold text-foreground truncate"
                title={record.fileName}
              >
                {record.fileName}
              </p>
              <div className="flex flex-wrap items-center gap-2 mt-1">
                <Badge
                  variant="outline"
                  className={`text-xs ${colors.bg} ${colors.text} ${colors.border} border`}
                >
                  {label}
                </Badge>
                <span className="text-xs text-muted-foreground">
                  {formatFileSize(record.fileSize)}
                </span>
              </div>
            </div>
          </div>

          {onDelete && (
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 opacity-0 group-hover:opacity-100 transition-smooth text-muted-foreground hover:text-destructive hover:bg-destructive/10"
              onClick={() => onDelete(record.id)}
              disabled={isDeleting}
              aria-label="Delete record"
              data-ocid={`record.delete_button.${index}`}
            >
              <Trash2 className="w-4 h-4" />
            </Button>
          )}
        </div>

        <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-1.5">
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <User className="w-3.5 h-3.5 shrink-0 text-primary/60" />
            <span className="truncate">{record.doctorName}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Building2 className="w-3.5 h-3.5 shrink-0 text-primary/60" />
            <span className="truncate">{record.hospitalName}</span>
          </div>
          <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="w-3.5 h-3.5 shrink-0 text-primary/60" />
            <span className="truncate">{formatDate(record.visitDate)}</span>
          </div>
        </div>

        {record.notes && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2 border-t border-border pt-2">
            {record.notes}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
