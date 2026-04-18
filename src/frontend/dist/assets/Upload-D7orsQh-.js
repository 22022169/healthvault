import { c as createLucideIcon, r as reactExports, j as jsxRuntimeExports, P as Primitive, d as cn, a as useNavigate, B as Button, U as Upload$1, X, S as Shield } from "./index-DQayhadV.js";
import { c as useMutateRecord, d as useUploadFile, F as FILE_TYPE_LABELS, I as Input, T as Trash2, E as ExternalBlob, e as FileType } from "./useBackend-Dvkq9EkE.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-Bxj1LhNv.js";
import { L as Label } from "./label-Bm8yq6Gi.js";
import { S as Select, a as SelectTrigger, b as SelectValue, c as SelectContent, d as SelectItem, C as CircleAlert } from "./select-BGpYNp4D.js";
import { F as FileText } from "./file-text-Wpi90zUi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const CircleCheck = createLucideIcon("circle-check", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z", key: "1rqfz7" }],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }]
];
const File = createLucideIcon("file", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }]
];
const Image = createLucideIcon("image", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8", key: "14sxne" }],
  ["path", { d: "M3 3v5h5", key: "1xhq8a" }],
  ["path", { d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16", key: "1hlbsb" }],
  ["path", { d: "M16 16h5v5", key: "ccwih5" }]
];
const RefreshCcw = createLucideIcon("refresh-ccw", __iconNode);
function createContextScope(scopeName, createContextScopeDeps = []) {
  let defaultContexts = [];
  function createContext3(rootComponentName, defaultContext) {
    const BaseContext = reactExports.createContext(defaultContext);
    BaseContext.displayName = rootComponentName + "Context";
    const index = defaultContexts.length;
    defaultContexts = [...defaultContexts, defaultContext];
    const Provider = (props) => {
      var _a;
      const { scope, children, ...context } = props;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const value = reactExports.useMemo(() => context, Object.values(context));
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Context.Provider, { value, children });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName, scope) {
      var _a;
      const Context = ((_a = scope == null ? void 0 : scope[scopeName]) == null ? void 0 : _a[index]) || BaseContext;
      const context = reactExports.useContext(Context);
      if (context) return context;
      if (defaultContext !== void 0) return defaultContext;
      throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [Provider, useContext2];
  }
  const createScope = () => {
    const scopeContexts = defaultContexts.map((defaultContext) => {
      return reactExports.createContext(defaultContext);
    });
    return function useScope(scope) {
      const contexts = (scope == null ? void 0 : scope[scopeName]) || scopeContexts;
      return reactExports.useMemo(
        () => ({ [`__scope${scopeName}`]: { ...scope, [scopeName]: contexts } }),
        [scope, contexts]
      );
    };
  };
  createScope.scopeName = scopeName;
  return [createContext3, composeContextScopes(createScope, ...createContextScopeDeps)];
}
function composeContextScopes(...scopes) {
  const baseScope = scopes[0];
  if (scopes.length === 1) return baseScope;
  const createScope = () => {
    const scopeHooks = scopes.map((createScope2) => ({
      useScope: createScope2(),
      scopeName: createScope2.scopeName
    }));
    return function useComposedScopes(overrideScopes) {
      const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName }) => {
        const scopeProps = useScope(overrideScopes);
        const currentScope = scopeProps[`__scope${scopeName}`];
        return { ...nextScopes2, ...currentScope };
      }, {});
      return reactExports.useMemo(() => ({ [`__scope${baseScope.scopeName}`]: nextScopes }), [nextScopes]);
    };
  };
  createScope.scopeName = baseScope.scopeName;
  return createScope;
}
var PROGRESS_NAME = "Progress";
var DEFAULT_MAX = 100;
var [createProgressContext] = createContextScope(PROGRESS_NAME);
var [ProgressProvider, useProgressContext] = createProgressContext(PROGRESS_NAME);
var Progress$1 = reactExports.forwardRef(
  (props, forwardedRef) => {
    const {
      __scopeProgress,
      value: valueProp = null,
      max: maxProp,
      getValueLabel = defaultGetValueLabel,
      ...progressProps
    } = props;
    if ((maxProp || maxProp === 0) && !isValidMaxNumber(maxProp)) {
      console.error(getInvalidMaxError(`${maxProp}`, "Progress"));
    }
    const max = isValidMaxNumber(maxProp) ? maxProp : DEFAULT_MAX;
    if (valueProp !== null && !isValidValueNumber(valueProp, max)) {
      console.error(getInvalidValueError(`${valueProp}`, "Progress"));
    }
    const value = isValidValueNumber(valueProp, max) ? valueProp : null;
    const valueLabel = isNumber(value) ? getValueLabel(value, max) : void 0;
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ProgressProvider, { scope: __scopeProgress, value, max, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "aria-valuemax": max,
        "aria-valuemin": 0,
        "aria-valuenow": isNumber(value) ? value : void 0,
        "aria-valuetext": valueLabel,
        role: "progressbar",
        "data-state": getProgressState(value, max),
        "data-value": value ?? void 0,
        "data-max": max,
        ...progressProps,
        ref: forwardedRef
      }
    ) });
  }
);
Progress$1.displayName = PROGRESS_NAME;
var INDICATOR_NAME = "ProgressIndicator";
var ProgressIndicator = reactExports.forwardRef(
  (props, forwardedRef) => {
    const { __scopeProgress, ...indicatorProps } = props;
    const context = useProgressContext(INDICATOR_NAME, __scopeProgress);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      Primitive.div,
      {
        "data-state": getProgressState(context.value, context.max),
        "data-value": context.value ?? void 0,
        "data-max": context.max,
        ...indicatorProps,
        ref: forwardedRef
      }
    );
  }
);
ProgressIndicator.displayName = INDICATOR_NAME;
function defaultGetValueLabel(value, max) {
  return `${Math.round(value / max * 100)}%`;
}
function getProgressState(value, maxValue) {
  return value == null ? "indeterminate" : value === maxValue ? "complete" : "loading";
}
function isNumber(value) {
  return typeof value === "number";
}
function isValidMaxNumber(max) {
  return isNumber(max) && !isNaN(max) && max > 0;
}
function isValidValueNumber(value, max) {
  return isNumber(value) && !isNaN(value) && value <= max && value >= 0;
}
function getInvalidMaxError(propValue, componentName) {
  return `Invalid prop \`max\` of value \`${propValue}\` supplied to \`${componentName}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${DEFAULT_MAX}\`.`;
}
function getInvalidValueError(propValue, componentName) {
  return `Invalid prop \`value\` of value \`${propValue}\` supplied to \`${componentName}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${DEFAULT_MAX} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Root = Progress$1;
var Indicator = ProgressIndicator;
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Root,
    {
      "data-slot": "progress",
      className: cn(
        "bg-primary/20 relative h-2 w-full overflow-hidden rounded-full",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Indicator,
        {
          "data-slot": "progress-indicator",
          className: "bg-primary h-full w-full flex-1 transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "border-input placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-3 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      ),
      ...props
    }
  );
}
const FILE_TYPES = Object.values(FileType);
const ACCEPTED_TYPES = [
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/jpg",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
];
const ACCEPTED_EXT = ".pdf,.jpg,.jpeg,.png,.docx";
const MAX_SIZE_MB = 10;
const MAX_SIZE_BYTES = MAX_SIZE_MB * 1024 * 1024;
const INITIAL_FORM = {
  fileType: "",
  doctorName: "",
  hospitalName: "",
  visitDate: "",
  notes: ""
};
function fileIcon(mimeType) {
  if (mimeType.startsWith("image/"))
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Image, { className: "w-5 h-5 text-accent" });
  if (mimeType === "application/pdf")
    return /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-5 h-5 text-primary" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(File, { className: "w-5 h-5 text-muted-foreground" });
}
function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}
function Upload() {
  const navigate = useNavigate();
  const { createRecord } = useMutateRecord();
  const uploadFile = useUploadFile();
  const [files, setFiles] = reactExports.useState([]);
  const [form, setForm] = reactExports.useState(INITIAL_FORM);
  const [isDragging, setIsDragging] = reactExports.useState(false);
  const [phase, setPhase] = reactExports.useState("idle");
  const [progress, setProgress] = reactExports.useState(0);
  const [errorMsg, setErrorMsg] = reactExports.useState("");
  const [validationError, setValidationError] = reactExports.useState("");
  const inputRef = reactExports.useRef(null);
  const addFiles = reactExports.useCallback((incoming) => {
    const valid = [];
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
        prev.map((e) => `${e.file.name}-${e.file.size}`)
      );
      return [
        ...prev,
        ...valid.filter((v) => !existing.has(`${v.file.name}-${v.file.size}`))
      ];
    });
  }, []);
  const handleDrop = reactExports.useCallback(
    (e) => {
      e.preventDefault();
      setIsDragging(false);
      addFiles(Array.from(e.dataTransfer.files));
    },
    [addFiles]
  );
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };
  const handleDragLeave = () => setIsDragging(false);
  const handleFileInput = (e) => {
    if (e.target.files) addFiles(Array.from(e.target.files));
    e.target.value = "";
  };
  const removeFile = (id) => setFiles((prev) => prev.filter((f) => f.id !== id));
  const isValid = files.length > 0 && form.fileType && form.doctorName.trim() && form.hospitalName.trim() && form.visitDate;
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
            const base = i / files.length * 100;
            setProgress(Math.round(base + pct / files.length));
          }
        );
        const keyBytes = await uploadFile(blob);
        const fileKey = new TextDecoder().decode(keyBytes);
        setPhase("saving");
        await createRecord.mutateAsync({
          fileName: entry.file.name,
          fileType: form.fileType,
          doctorName: form.doctorName.trim(),
          hospitalName: form.hospitalName.trim(),
          visitDate: form.visitDate,
          notes: form.notes.trim() || void 0,
          fileKey,
          fileSize: BigInt(entry.file.size)
        });
      }
      setPhase("success");
      setProgress(100);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Upload failed. Please try again.";
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
  if (phase === "success") {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "max-w-lg mx-auto px-4 sm:px-6 py-16 text-center",
        "data-ocid": "upload.success_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6 ring-4 ring-accent/20", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "w-10 h-10 text-accent" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-bold text-foreground mb-2", children: "Record uploaded successfully!" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mb-8", children: "Your medical document has been securely stored in your HealthVault." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Button,
              {
                type: "button",
                variant: "outline",
                className: "gap-2",
                onClick: resetAll,
                "data-ocid": "upload.upload_another_button",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Upload$1, { className: "w-4 h-4" }),
                  "Upload Another"
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                type: "button",
                className: "gap-2",
                onClick: () => navigate({ to: "/history" }),
                "data-ocid": "upload.view_history_button",
                children: "View in History"
              }
            )
          ] })
        ]
      }
    );
  }
  const isUploading = phase === "uploading" || phase === "saving";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-6xl mx-auto px-4 sm:px-6 py-8",
      "data-ocid": "upload.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl font-bold text-foreground", children: "Upload Medical Record" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Add documents to your secure encrypted vault" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-6 items-start", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                "aria-label": "Upload file area — click or drag files here",
                className: [
                  "relative w-full rounded-xl border-2 border-dashed p-8 flex flex-col items-center justify-center gap-3 cursor-pointer transition-smooth min-h-[220px]",
                  isDragging ? "border-primary bg-primary/5 scale-[1.01]" : "border-border hover:border-primary/50 hover:bg-muted/40"
                ].join(" "),
                onDrop: handleDrop,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                onClick: () => {
                  var _a;
                  return (_a = inputRef.current) == null ? void 0 : _a.click();
                },
                "data-ocid": "upload.dropzone",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "input",
                    {
                      ref: inputRef,
                      type: "file",
                      multiple: true,
                      accept: ACCEPTED_EXT,
                      className: "sr-only",
                      onChange: handleFileInput,
                      "data-ocid": "upload.file_input"
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload$1, { className: "w-7 h-7 text-primary" }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground", children: isDragging ? "Drop files here" : "Drag & drop files" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground mt-0.5", children: [
                      "or",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-medium underline-offset-2 hover:underline", children: "browse to upload" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
                    "PDF, JPG, PNG, DOCX · max ",
                    MAX_SIZE_MB,
                    " MB each"
                  ] })
                ]
              }
            ),
            files.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "border-border shadow-card",
                "data-ocid": "upload.file_list",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-0 divide-y divide-border", children: files.map((entry, idx) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "flex items-center gap-3 px-4 py-3",
                    "data-ocid": `upload.file.item.${idx + 1}`,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0", children: fileIcon(entry.file.type) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground truncate", children: entry.file.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: formatBytes(entry.file.size) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "button",
                        {
                          type: "button",
                          "aria-label": `Remove ${entry.file.name}`,
                          className: "shrink-0 p-1.5 rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-smooth",
                          onClick: () => removeFile(entry.id),
                          disabled: isUploading,
                          "data-ocid": `upload.remove_file_button.${idx + 1}`,
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4" })
                        }
                      )
                    ]
                  },
                  entry.id
                )) })
              }
            ),
            isUploading && /* @__PURE__ */ jsxRuntimeExports.jsx(
              Card,
              {
                className: "border-border shadow-card",
                "data-ocid": "upload.loading_state",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 space-y-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-medium", children: phase === "saving" ? "Saving record…" : "Uploading file…" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground tabular-nums", children: [
                      progress,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Progress, { value: progress, className: "h-2" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: phase === "saving" ? "Storing metadata securely" : "Encrypting and uploading to vault" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground px-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3.5 h-3.5 text-accent shrink-0" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Files are encrypted end-to-end and stored securely" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border shadow-card", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-4 h-4 text-primary" }),
              "Record Details"
            ] }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
                  "Document Type ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Select,
                  {
                    value: form.fileType,
                    onValueChange: (v) => setForm({ ...form, fileType: v }),
                    disabled: isUploading,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { "data-ocid": "upload.file_type.select", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Select document type" }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectContent, { children: FILE_TYPES.map((ft) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: ft, children: FILE_TYPE_LABELS[ft] }, ft)) })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "doctorName", children: [
                    "Doctor Name ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "doctorName",
                      placeholder: "Dr. Sarah Patel",
                      value: form.doctorName,
                      onChange: (e) => setForm({ ...form, doctorName: e.target.value }),
                      disabled: isUploading,
                      "data-ocid": "upload.doctor_name.input"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "hospitalName", children: [
                    "Hospital / Clinic",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Input,
                    {
                      id: "hospitalName",
                      placeholder: "City Medical Center",
                      value: form.hospitalName,
                      onChange: (e) => setForm({ ...form, hospitalName: e.target.value }),
                      disabled: isUploading,
                      "data-ocid": "upload.hospital_name.input"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: "visitDate", children: [
                  "Visit Date ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "visitDate",
                    type: "date",
                    value: form.visitDate,
                    onChange: (e) => setForm({ ...form, visitDate: e.target.value }),
                    disabled: isUploading,
                    "data-ocid": "upload.visit_date.input"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "notes", children: "Notes (optional)" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Textarea,
                  {
                    id: "notes",
                    placeholder: "Additional context, symptoms, or instructions…",
                    value: form.notes,
                    onChange: (e) => setForm({ ...form, notes: e.target.value }),
                    rows: 3,
                    disabled: isUploading,
                    "data-ocid": "upload.notes.textarea"
                  }
                )
              ] }),
              validationError && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-center gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2",
                  "data-ocid": "upload.field_error",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0" }),
                    validationError
                  ]
                }
              ),
              phase === "error" && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "flex items-start gap-2 text-sm text-destructive bg-destructive/10 border border-destructive/20 rounded-md px-3 py-2",
                  "data-ocid": "upload.error_state",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleAlert, { className: "w-4 h-4 shrink-0 mt-0.5" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium", children: "Upload failed" }),
                      errorMsg && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs mt-0.5 opacity-80", children: errorMsg })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "button",
                      {
                        type: "button",
                        className: "shrink-0 p-1 rounded hover:bg-destructive/10 transition-smooth",
                        onClick: () => setPhase("idle"),
                        "aria-label": "Dismiss error",
                        "data-ocid": "upload.error_dismiss_button",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" })
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-2 pt-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "button",
                    className: "w-full gap-2",
                    size: "lg",
                    disabled: isUploading || !isValid && phase !== "error",
                    onClick: handleUpload,
                    "data-ocid": "upload.submit_button",
                    children: phase === "saving" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" }),
                      "Saving record…"
                    ] }) : phase === "uploading" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" }),
                      "Uploading… ",
                      progress,
                      "%"
                    ] }) : phase === "error" ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(RefreshCcw, { className: "w-4 h-4" }),
                      "Retry Upload"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Upload$1, { className: "w-4 h-4" }),
                      "Save to Health Vault"
                    ] })
                  }
                ),
                (files.length > 0 || form.doctorName) && !isUploading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  Button,
                  {
                    type: "button",
                    variant: "ghost",
                    className: "w-full gap-2 text-muted-foreground",
                    onClick: resetAll,
                    "data-ocid": "upload.clear_button",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "w-4 h-4" }),
                      "Clear all"
                    ]
                  }
                )
              ] })
            ] }) })
          ] })
        ] })
      ]
    }
  );
}
export {
  Upload as default
};
