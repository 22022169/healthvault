import { c as createLucideIcon, u as useAuth, j as jsxRuntimeExports, b as Skeleton, S as Shield, L as Link, B as Button, U as Upload, r as reactExports, X } from "./index-DQayhadV.js";
import { U as User, B as Building2, C as Calendar, R as RecordCard } from "./RecordCard-DnnWWMIe.js";
import { B as Badge } from "./badge-rc1SU2KV.js";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-Bxj1LhNv.js";
import { u as useProfile, a as useRecords, b as useMutateProfile, I as Input } from "./useBackend-Dvkq9EkE.js";
import { L as Label } from "./label-Bm8yq6Gi.js";
import { U as Users } from "./users-DTUMmGlW.js";
import "./file-text-Wpi90zUi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$5 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M8 12h8", key: "1wcyev" }],
  ["path", { d: "M12 8v8", key: "napkw2" }]
];
const CirclePlus = createLucideIcon("circle-plus", __iconNode$5);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$4 = [
  ["rect", { width: "8", height: "4", x: "8", y: "2", rx: "1", ry: "1", key: "tgr4d6" }],
  [
    "path",
    {
      d: "M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",
      key: "116196"
    }
  ],
  ["path", { d: "M12 11h4", key: "1jrz19" }],
  ["path", { d: "M12 16h4", key: "n85exb" }],
  ["path", { d: "M8 11h.01", key: "1dfujw" }],
  ["path", { d: "M8 16h.01", key: "18s6g9" }]
];
const ClipboardList = createLucideIcon("clipboard-list", __iconNode$4);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  ["line", { x1: "22", x2: "2", y1: "12", y2: "12", key: "1y58io" }],
  [
    "path",
    {
      d: "M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",
      key: "oot6mr"
    }
  ],
  ["line", { x1: "6", x2: "6.01", y1: "16", y2: "16", key: "sgf278" }],
  ["line", { x1: "10", x2: "10.01", y1: "16", y2: "16", key: "1l4acy" }]
];
const HardDrive = createLucideIcon("hard-drive", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu"
    }
  ]
];
const Pen = createLucideIcon("pen", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    { d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z", key: "wa1lgi" }
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }]
];
const Pill = createLucideIcon("pill", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476"
    }
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }]
];
const Save = createLucideIcon("save", __iconNode);
function formatBytes(bytes) {
  const n = Number(bytes);
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  if (n < 1024 * 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  return `${(n / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}
function formatDob(dateStr) {
  if (!dateStr) return "—";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  } catch {
    return dateStr;
  }
}
const MOCK_APPOINTMENTS = [
  {
    title: "Annual Physical Exam",
    doctor: "Dr. Sarah Chen",
    date: "May 15, 2026",
    time: "10:00 AM"
  },
  {
    title: "Cardiology Follow-up",
    doctor: "Dr. James Patel",
    date: "May 28, 2026",
    time: "2:30 PM"
  }
];
const MOCK_MEDICATIONS = [
  {
    name: "Lisinopril",
    dose: "10mg",
    frequency: "Once daily",
    start: "Jan 15"
  },
  {
    name: "Metformin",
    dose: "500mg",
    frequency: "Twice daily",
    start: "Mar 3"
  }
];
function StatCard({ label, value, icon, loading, ocid }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Card, { className: "border-border shadow-card", "data-ocid": ocid, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "p-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-w-0", children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-16 mb-1" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-24" })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-2xl font-bold text-foreground leading-tight", children: value }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: label })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: icon })
  ] }) }) });
}
function ProfileSection({ profile, loading }) {
  const mutate = useMutateProfile();
  const [editing, setEditing] = reactExports.useState(false);
  const [form, setForm] = reactExports.useState({
    name: "",
    dateOfBirth: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: ""
  });
  function startEdit() {
    setForm({
      name: (profile == null ? void 0 : profile.name) ?? "",
      dateOfBirth: (profile == null ? void 0 : profile.dateOfBirth) ?? "",
      email: (profile == null ? void 0 : profile.email) ?? "",
      emergencyContactName: (profile == null ? void 0 : profile.emergencyContactName) ?? "",
      emergencyContactPhone: (profile == null ? void 0 : profile.emergencyContactPhone) ?? ""
    });
    setEditing(true);
  }
  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  function handleSave() {
    mutate.mutate(form, { onSuccess: () => setEditing(false) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border shadow-card", "data-ocid": "profile.card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-4 h-4 text-primary" }),
        "Patient Profile"
      ] }),
      !editing && !loading && /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          className: "gap-1.5",
          onClick: startEdit,
          "data-ocid": "profile.edit_button",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Pen, { className: "w-3.5 h-3.5" }),
            "Edit"
          ]
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-5 w-48" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-64" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-56" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-4 w-40" })
    ] }) : editing ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", "data-ocid": "profile.edit_form", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "name", children: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "name",
              name: "name",
              value: form.name,
              onChange: handleChange,
              placeholder: "Jane Doe",
              "data-ocid": "profile.name_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "dateOfBirth", children: "Date of Birth" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "dateOfBirth",
              name: "dateOfBirth",
              type: "date",
              value: form.dateOfBirth,
              onChange: handleChange,
              "data-ocid": "profile.dob_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 sm:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "email", children: "Email" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "email",
              name: "email",
              type: "email",
              value: form.email,
              onChange: handleChange,
              placeholder: "you@example.com",
              "data-ocid": "profile.email_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "emergencyContactName", children: "Emergency Contact" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "emergencyContactName",
              name: "emergencyContactName",
              value: form.emergencyContactName,
              onChange: handleChange,
              placeholder: "Contact name",
              "data-ocid": "profile.emergency_name_input"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: "emergencyContactPhone", children: "Phone" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Input,
            {
              id: "emergencyContactPhone",
              name: "emergencyContactPhone",
              value: form.emergencyContactPhone,
              onChange: handleChange,
              placeholder: "+1 555 000 0000",
              "data-ocid": "profile.emergency_phone_input"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 pt-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            className: "gap-1.5",
            onClick: handleSave,
            disabled: mutate.isPending,
            "data-ocid": "profile.save_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Save, { className: "w-3.5 h-3.5" }),
              mutate.isPending ? "Saving…" : "Save Changes"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: "gap-1.5",
            onClick: () => setEditing(false),
            disabled: mutate.isPending,
            "data-ocid": "profile.cancel_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-3.5 h-3.5" }),
              "Cancel"
            ]
          }
        )
      ] }),
      mutate.isError && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "p",
        {
          className: "text-sm text-destructive",
          "data-ocid": "profile.error_state",
          children: "Failed to save. Please try again."
        }
      )
    ] }) : profile ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-primary" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: profile.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground truncate", children: profile.email })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-y-2 text-sm border-t border-border pt-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Born:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: formatDob(profile.dateOfBirth) })
        ] }),
        profile.emergencyContactName && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-3.5 h-3.5 text-muted-foreground shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Emergency:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-medium text-foreground", children: [
            profile.emergencyContactName,
            profile.emergencyContactPhone ? ` · ${profile.emergencyContactPhone}` : ""
          ] })
        ] })
      ] })
    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center text-center py-6 gap-3",
        "data-ocid": "profile.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-muted flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-6 h-6 text-muted-foreground" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-foreground text-sm", children: "Profile not set up" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Add your details so healthcare providers can identify you." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              type: "button",
              size: "sm",
              onClick: startEdit,
              "data-ocid": "profile.setup_button",
              children: "Set Up Profile"
            }
          )
        ]
      }
    ) })
  ] });
}
function RecentRecordsSection({ records, loading }) {
  const recent = (records == null ? void 0 : records.slice(0, 5)) ?? [];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border shadow-card", "data-ocid": "recent_records.card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-4 h-4 text-primary" }),
        "Recent Records"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/history", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            className: "text-primary hover:text-primary text-xs",
            "data-ocid": "recent_records.view_all_link",
            children: "View All"
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            className: "gap-1.5",
            "data-ocid": "recent_records.upload_button",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlus, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Upload" })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: [1, 2, 3].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-20 w-full rounded-lg" }, i)) }) : recent.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center text-center py-8 gap-3",
        "data-ocid": "recent_records.empty_state",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-7 h-7 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: "No records yet" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Upload your first medical document to get started." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              type: "button",
              size: "sm",
              className: "gap-2 mt-1",
              "data-ocid": "recent_records.first_upload_button",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-4 h-4" }),
                "Upload your first record"
              ]
            }
          ) })
        ]
      }
    ) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: recent.map((record, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      RecordCard,
      {
        record,
        index: idx + 1
      },
      String(record.id)
    )) }) })
  ] });
}
function Dashboard() {
  const { isAuthenticated } = useAuth();
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: records, isLoading: recordsLoading } = useRecords();
  const totalRecords = (records == null ? void 0 : records.length) ?? 0;
  const storageUsed = (records == null ? void 0 : records.reduce((acc, r) => acc + r.fileSize, BigInt(0))) ?? BigInt(0);
  const uniqueDoctors = new Set(records == null ? void 0 : records.map((r) => r.doctorName)).size;
  const uniqueHospitals = new Set(records == null ? void 0 : records.map((r) => r.hospitalName)).size;
  const welcomeName = (profile == null ? void 0 : profile.name) ? `Welcome back, ${profile.name.split(" ")[0]}!` : "Welcome to HealthVault";
  const statsLoading = recordsLoading || !isAuthenticated;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", "data-ocid": "dashboard.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-card border-b border-border px-4 sm:px-6 py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "h1",
          {
            className: "text-xl sm:text-2xl font-bold font-display text-foreground",
            "data-ocid": "dashboard.welcome_banner",
            children: profileLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, { className: "h-7 w-52 inline-block" }) : welcomeName
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-0.5", children: "Your personal health records hub" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Badge,
          {
            variant: "outline",
            className: "hidden sm:flex items-center gap-1.5 border-primary/30 text-primary bg-primary/5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-3 h-3" }),
              "Encrypted & Secure"
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/upload", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            type: "button",
            size: "sm",
            className: "gap-1.5",
            "data-ocid": "dashboard.upload_cta",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "w-3.5 h-3.5" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: "Upload Record" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: "Upload" })
            ]
          }
        ) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "section",
        {
          "aria-label": "Summary statistics",
          "data-ocid": "dashboard.stats_section",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                label: "Total Records",
                value: totalRecords,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(ClipboardList, { className: "w-5 h-5 text-primary" }),
                loading: statsLoading,
                ocid: "stats.total_records"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                label: "Storage Used",
                value: formatBytes(storageUsed),
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(HardDrive, { className: "w-5 h-5 text-primary" }),
                loading: statsLoading,
                ocid: "stats.storage_used"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                label: "Doctors",
                value: uniqueDoctors,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "w-5 h-5 text-primary" }),
                loading: statsLoading,
                ocid: "stats.doctors"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              StatCard,
              {
                label: "Hospitals",
                value: uniqueHospitals,
                icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Building2, { className: "w-5 h-5 text-primary" }),
                loading: statsLoading,
                ocid: "stats.hospitals"
              }
            )
          ] })
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "aria-label": "Profile and recent records",
          className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
          "data-ocid": "dashboard.main_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ProfileSection, { profile, loading: profileLoading }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(RecentRecordsSection, { records, loading: recordsLoading })
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "section",
        {
          "aria-label": "Appointments and medications",
          className: "grid grid-cols-1 lg:grid-cols-2 gap-6",
          "data-ocid": "dashboard.secondary_section",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                className: "border-border shadow-card",
                "data-ocid": "dashboard.appointments.card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 flex flex-row items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }),
                    "Upcoming Appointments"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MOCK_APPOINTMENTS.map((appt, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "flex items-start gap-3 p-3 bg-muted/40 rounded-lg",
                      "data-ocid": `dashboard.appointment.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "w-4 h-4 text-primary" }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0 flex-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-foreground", children: appt.title }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: appt.doctor }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-primary mt-0.5", children: [
                            appt.date,
                            " at ",
                            appt.time
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          Badge,
                          {
                            variant: "outline",
                            className: "text-xs bg-accent/10 text-accent border-accent/20 shrink-0",
                            children: "Upcoming"
                          }
                        )
                      ]
                    },
                    appt.title
                  )) }) })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              Card,
              {
                className: "border-border shadow-card",
                "data-ocid": "dashboard.medications.card",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-3 flex flex-row items-center justify-between", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base font-semibold flex items-center gap-2", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Pill, { className: "w-4 h-4 text-primary" }),
                    "Active Medications"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MOCK_MEDICATIONS.map((med, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "pb-3 border-b border-border last:border-0 last:pb-0",
                      "data-ocid": `dashboard.medication.item.${i + 1}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm font-semibold text-foreground", children: [
                            med.name,
                            " — ",
                            med.dose
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(
                            Badge,
                            {
                              variant: "outline",
                              className: "text-xs bg-accent/10 text-accent border-accent/20 shrink-0",
                              children: "Active"
                            }
                          )
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
                          med.frequency,
                          " · Started ",
                          med.start
                        ] })
                      ]
                    },
                    med.name
                  )) }) })
                ]
              }
            )
          ]
        }
      )
    ] })
  ] });
}
export {
  Dashboard as default
};
