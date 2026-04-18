import { c as createLucideIcon, j as jsxRuntimeExports, at as CircleHelp, S as Shield } from "./index-DQayhadV.js";
import { C as Card, a as CardContent, b as CardHeader, c as CardTitle } from "./card-Bxj1LhNv.js";
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y"
    }
  ]
];
const BookOpen = createLucideIcon("book-open", __iconNode$2);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  ["path", { d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7", key: "132q7q" }],
  ["rect", { x: "2", y: "4", width: "20", height: "16", rx: "2", key: "izxlao" }]
];
const Mail = createLucideIcon("mail", __iconNode$1);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode);
const FAQ_ITEMS = [
  {
    q: "Is my health data safe?",
    a: "Yes. HealthVault stores all records on the Internet Computer, a decentralized blockchain network. Data is encrypted and only accessible with your Internet Identity."
  },
  {
    q: "Who can see my records?",
    a: "Only you can access your records by default. You can share specific records with doctors using secure, time-limited links — and revoke access at any time."
  },
  {
    q: "How do I add medical records?",
    a: "Go to the Upload page after signing in. Fill in the record details, select the document type, and save. Records are immediately available in your Medical History."
  },
  {
    q: "Can I delete records?",
    a: "Yes. Open Medical History, hover over any record, and click the delete icon. Deletion is permanent and cannot be undone."
  },
  {
    q: "What is Internet Identity?",
    a: "Internet Identity is a secure, passwordless authentication system built on the Internet Computer. No email or password is required — authentication uses cryptographic keys stored on your device."
  }
];
function Contact() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "div",
    {
      className: "max-w-3xl mx-auto px-4 sm:px-6 py-8",
      "data-ocid": "contact.page",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl font-bold text-foreground flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleHelp, { className: "w-6 h-6 text-primary" }),
            "Help & Support"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground mt-1", children: "Answers to common questions about HealthVault" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8", children: [
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(BookOpen, { className: "w-5 h-5 text-primary" }),
            title: "Documentation",
            desc: "Guides and how-tos"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "w-5 h-5 text-accent" }),
            title: "Community",
            desc: "Ask other users"
          },
          {
            icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "w-5 h-5 text-primary" }),
            title: "Contact Us",
            desc: "Get direct support"
          }
        ].map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          Card,
          {
            className: "border-border shadow-card",
            "data-ocid": `contact.resource.item.${i + 1}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardContent, { className: "p-4 flex gap-3 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0", children: item.icon }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground", children: item.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: item.desc })
              ] })
            ] })
          },
          item.title
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "border-border shadow-card", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(CardTitle, { className: "text-base flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "w-4 h-4 text-primary" }),
            "Frequently Asked Questions"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "divide-y divide-border", children: FAQ_ITEMS.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "py-4 first:pt-0 last:pb-0",
              "data-ocid": `contact.faq.item.${i + 1}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-medium text-sm text-foreground mb-1", children: item.q }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: item.a })
              ]
            },
            item.q
          )) })
        ] })
      ]
    }
  );
}
export {
  Contact as default
};
