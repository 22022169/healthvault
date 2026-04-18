import { c as createLucideIcon, j as jsxRuntimeExports, B as Button, L as Link, S as Shield } from "./index-DQayhadV.js";
import { B as Badge } from "./badge-rc1SU2KV.js";
import { C as Card, a as CardContent } from "./card-Bxj1LhNv.js";
import { L as Lock } from "./lock-C74bnavo.js";
import { U as Users } from "./users-DTUMmGlW.js";
import { F as FileText } from "./file-text-Wpi90zUi.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse"
    }
  ]
];
const Activity = createLucideIcon("activity", __iconNode$3);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }]
];
const Clock = createLucideIcon("clock", __iconNode$1);
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
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode);
const features = [
  {
    emoji: "🔒",
    title: "Secure & Encrypted",
    description: "All your medical records are encrypted at rest using industry-standard AES-256 encryption. Your data stays private — always.",
    bg: "bg-primary/10"
  },
  {
    emoji: "📤",
    title: "Upload from Anywhere",
    description: "Add records from any device, any format — PDFs, images, X-rays, scanned documents. No special software needed.",
    bg: "bg-accent/10"
  },
  {
    emoji: "🔍",
    title: "Search & Organize",
    description: "Find any record instantly by keyword, doctor, hospital, date, or diagnosis. Everything organized the way you think.",
    bg: "bg-primary/10"
  }
];
const stats = [
  { label: "100% Private", description: "Zero third-party data sharing" },
  {
    label: "Multiple File Formats",
    description: "PDF, JPG, PNG, DICOM & more"
  },
  { label: "Instant Search", description: "Find any record in seconds" }
];
const testimonials = [
  {
    quote: "Having all my records in one secure place has been life-changing. My doctors can now see my complete history instantly.",
    name: "Sarah M.",
    role: "Patient, Cardiac Care",
    initials: "SM"
  },
  {
    quote: "I travel frequently and having my medical history accessible anywhere gives me real peace of mind.",
    name: "James T.",
    role: "Patient, General Practice",
    initials: "JT"
  },
  {
    quote: "The emergency access feature saved critical time when my father was admitted to hospital abroad.",
    name: "Priya K.",
    role: "Caregiver",
    initials: "PK"
  }
];
const steps = [
  {
    step: "01",
    title: "Create your account",
    description: "Sign up securely with two-factor authentication enabled from day one."
  },
  {
    step: "02",
    title: "Upload your records",
    description: "Add prescriptions, lab reports, X-rays, and more from any device."
  },
  {
    step: "03",
    title: "Access anywhere, anytime",
    description: "View, share, and manage your complete health history at any moment."
  }
];
const highlights = [
  { icon: Clock, label: "Timeline View", desc: "Complete medical history" },
  {
    icon: Shield,
    label: "Emergency Access",
    desc: "Critical info, always available"
  },
  { icon: Users, label: "Doctor Sharing", desc: "Secure one-click sharing" },
  { icon: Activity, label: "Med Reminders", desc: "Never miss a dose" }
];
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col min-h-screen", "data-ocid": "home.page", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-card border-b", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:gap-16", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 text-center lg:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Badge,
            {
              variant: "outline",
              className: "mb-6 inline-flex items-center gap-2 border-primary/30 text-primary bg-primary/5 px-3 py-1.5",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Activity, { className: "w-3.5 h-3.5" }),
                "Your personal health vault"
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6", children: [
            "Your Health Records,",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "Secured" }),
            " in One Place"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0", children: "Store, organize, and access all your medical records from every doctor and hospital — securely encrypted, always at your fingertips." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center lg:justify-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                size: "lg",
                className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12 shadow-elevated transition-smooth",
                "data-ocid": "hero.primary_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", children: [
                  "Get Started Free",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 w-4 h-4" })
                ] })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                variant: "outline",
                size: "lg",
                className: "border-border text-foreground hover:bg-muted font-medium px-8 h-12 transition-smooth",
                "data-ocid": "hero.secondary_button",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/login", children: "Sign In" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-accent" }),
              "AES-256 Encrypted"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block w-1 h-1 rounded-full bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Lock, { className: "w-4 h-4 text-accent" }),
              "HIPAA Compliant"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:block w-1 h-1 rounded-full bg-border" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "w-4 h-4 text-accent" }),
              "Trusted by thousands"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-shrink-0 mt-12 lg:mt-0 lg:w-[400px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeroDashboardPreview, {}) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 sm:divide-x divide-primary-foreground/20", children: stats.map((stat) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "text-center sm:px-8 py-1 sm:py-0",
        "data-ocid": "stats.item",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground font-bold text-lg", children: stat.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/70 text-sm mt-0.5", children: stat.description })
        ]
      },
      stat.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", id: "features", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "mb-4 border-accent/30 text-accent bg-accent/5",
            children: "Everything you need"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-foreground mb-4", children: "Built for your peace of mind" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-2xl mx-auto", children: "HealthVault gives you a single secure home for your complete medical history — designed for patients, trusted by caregivers." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          "data-ocid": "features.list",
          children: features.map((feature, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "border-border shadow-card hover:shadow-elevated transition-smooth group",
              "data-ocid": `features.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "div",
                  {
                    className: `w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 transition-smooth group-hover:scale-110`,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: feature.emoji })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: feature.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: feature.description })
              ] })
            },
            feature.title
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 py-20 border-y", id: "how-it-works", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "mb-4 border-primary/30 text-primary bg-primary/5",
            children: "Simple process"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-foreground mb-4", children: "Up and running in minutes" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-lg max-w-xl mx-auto", children: "Three simple steps to a complete, secure health record system." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-10", children: steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex flex-col items-center text-center",
          "data-ocid": `steps.item.${i + 1}`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5 shadow-elevated", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-bold text-lg", children: step.step }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold text-foreground mb-2", children: step.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed max-w-xs", children: step.description })
          ]
        },
        step.step
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-20", id: "testimonials", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Badge,
          {
            variant: "outline",
            className: "mb-4 border-accent/30 text-accent bg-accent/5",
            children: "Real patients, real stories"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-foreground mb-4", children: "Trusted by patients everywhere" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "grid grid-cols-1 md:grid-cols-3 gap-6",
          "data-ocid": "testimonials.list",
          children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            Card,
            {
              className: "border-border shadow-card",
              "data-ocid": `testimonials.item.${i + 1}`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-6 flex flex-col gap-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-start gap-0.5 text-accent", children: ["1", "2", "3", "4", "5"].map((si) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-lg leading-none", children: "★" }, si)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-muted-foreground text-sm leading-relaxed flex-1", children: [
                  '"',
                  t.quote,
                  '"'
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 pt-2 border-t border-border", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold text-xs", children: t.initials }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-medium text-sm truncate", children: t.name }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs truncate", children: t.role })
                  ] })
                ] })
              ] })
            },
            t.name
          ))
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-muted/40 border-y py-14", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-4 gap-6 text-center", children: highlights.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "flex flex-col items-center gap-2",
        "data-ocid": `highlights.item.${i + 1}`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "w-5 h-5 text-primary" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground text-sm", children: item.label }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: item.desc })
        ]
      },
      item.label
    )) }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-primary py-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, { className: "w-7 h-7 text-primary-foreground" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-bold text-primary-foreground mb-4", children: "Ready to take control of your health?" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/75 text-lg mb-8 max-w-xl mx-auto", children: "Join thousands of patients who've already secured their complete medical history in one safe, accessible place." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3 justify-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            size: "lg",
            className: "bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-12 shadow-elevated transition-smooth",
            "data-ocid": "cta.primary_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/login", children: [
              "Create Free Account",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-1 w-4 h-4" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            asChild: true,
            variant: "ghost",
            size: "lg",
            className: "text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 h-12 transition-smooth",
            "data-ocid": "cta.secondary_button",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/contact", children: "Have questions? Contact us" })
          }
        )
      ] })
    ] }) })
  ] });
}
function HeroDashboardPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card shadow-elevated overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-primary px-4 py-3 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary-foreground font-bold text-sm tracking-tight", children: "HealthVault" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-2 h-2 rounded-full bg-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-5 h-5 rounded-full bg-primary-foreground/20" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-4 space-y-3 bg-muted/20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-lg p-3 border border-border shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground", children: "Personal Details" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-accent font-medium flex items-center gap-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "w-1.5 h-1.5 rounded-full bg-accent inline-block" }),
              "Active"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary text-xs font-bold", children: "ER" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground text-xs font-medium truncate", children: "Evelyn Reed" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-xs", children: "Age 26 · info@example.com" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-lg p-3 border border-border shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2", children: "Recent Reports" }),
          ["Annual Checkup", "Blood Test Result"].map((name) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "flex items-center justify-between py-1",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 min-w-0", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "w-3 h-3 text-accent flex-shrink-0" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-foreground truncate", children: name })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-accent/15 text-accent font-medium rounded px-1.5 py-0.5 flex-shrink-0 ml-2", children: "Success" })
              ]
            },
            name
          ))
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card rounded-lg p-3 border border-border shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold text-foreground mb-2", children: "Upcoming Appointments" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-foreground font-medium", children: "Dr. Evelyn Reed (Cardiology)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mb-2", children: "Oct 28, 2026 at 10:00 AM" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] bg-accent text-accent-foreground font-medium rounded-full px-2 py-0.5", children: "Appointment" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-3 -right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-elevated", children: "🔒 Encrypted" })
  ] });
}
export {
  Home as default
};
