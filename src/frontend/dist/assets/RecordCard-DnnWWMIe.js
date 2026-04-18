import { c as createLucideIcon, j as jsxRuntimeExports, B as Button } from "./index-DQayhadV.js";
import { F as FILE_TYPE_LABELS, f as FILE_TYPE_COLORS, T as Trash2, e as FileType } from "./useBackend-Dvkq9EkE.js";
import { B as Badge } from "./badge-rc1SU2KV.js";
import { C as Card, a as CardContent } from "./card-Bxj1LhNv.js";
import { F as FileText } from "./file-text-Wpi90zUi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z", key: "1b4qmf" }],
  ["path", { d: "M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2", key: "i71pzd" }],
  ["path", { d: "M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2", key: "10jefs" }],
  ["path", { d: "M10 6h4", key: "1itunk" }],
  ["path", { d: "M10 10h4", key: "tcdvrf" }],
  ["path", { d: "M10 14h4", key: "kelpxr" }],
  ["path", { d: "M10 18h4", key: "1ulq68" }]
];
const Building2 = createLucideIcon("building-2", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
function formatFileSize(bytes) {
  const n = Number(bytes);
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(1)} MB`;
}
function formatDate(dateStr) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric"
    });
  } catch {
    return dateStr;
  }
}
function RecordCard({
  record,
  index,
  onDelete,
  isDeleting
}) {
  const fileTypeKey = record.fileType;
  const label = FILE_TYPE_LABELS[fileTypeKey] ?? record.fileType;
  const colors = FILE_TYPE_COLORS[fileTypeKey] ?? FILE_TYPE_COLORS[FileType.Other];
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Card,
    {
      className: "group hover:shadow-card transition-smooth border-border",
      "data-ocid": `record.item.${index}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 min-w-0 flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `shrink-0 w-10 h-10 rounded-lg flex items-center justify-center ${colors.bg} ${colors.border} border`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: `w-5 h-5 ${colors.text}` })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "p",
                {
                  className: "font-semibold text-foreground truncate",
                  title: record.fileName,
                  children: record.fileName
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 mt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Badge,
                  {
                    variant: "outline",
                    className: `text-xs ${colors.bg} ${colors.text} ${colors.border} border`,
                    children: label
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: formatFileSize(record.fileSize) })
              ] })
            ] })
          ] }),
          onDelete && /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              variant: "ghost",
              size: "icon",
              className: "shrink-0 opacity-0 group-hover:opacity-100 transition-smooth text-muted-foreground hover:text-destructive hover:bg-destructive/10",
              onClick: () => onDelete(record.id),
              disabled: isDeleting,
              "aria-label": "Delete record",
              "data-ocid": `record.delete_button.${index}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 grid grid-cols-1 sm:grid-cols-3 gap-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-3.5 h-3.5 shrink-0 text-primary/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: record.doctorName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-3.5 h-3.5 shrink-0 text-primary/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: record.hospitalName })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 shrink-0 text-primary/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate", children: formatDate(record.visitDate) })
          ] })
        ] }),
        record.notes && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground line-clamp-2 border-t border-border pt-2", children: record.notes })
      ] })
    }
  );
}
export {
  Building2 as B,
  Calendar as C,
  RecordCard as R,
  User as U
};
