import {
  BookOpen,
  HelpCircle,
  Mail,
  MessageCircle,
  Shield,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const FAQ_ITEMS = [
  {
    q: "Is my health data safe?",
    a: "Yes. HealthVault stores all records on the Internet Computer, a decentralized blockchain network. Data is encrypted and only accessible with your Internet Identity.",
  },
  {
    q: "Who can see my records?",
    a: "Only you can access your records by default. You can share specific records with doctors using secure, time-limited links — and revoke access at any time.",
  },
  {
    q: "How do I add medical records?",
    a: "Go to the Upload page after signing in. Fill in the record details, select the document type, and save. Records are immediately available in your Medical History.",
  },
  {
    q: "Can I delete records?",
    a: "Yes. Open Medical History, hover over any record, and click the delete icon. Deletion is permanent and cannot be undone.",
  },
  {
    q: "What is Internet Identity?",
    a: "Internet Identity is a secure, passwordless authentication system built on the Internet Computer. No email or password is required — authentication uses cryptographic keys stored on your device.",
  },
];

export default function Contact() {
  return (
    <div
      className="max-w-3xl mx-auto px-4 sm:px-6 py-8"
      data-ocid="contact.page"
    >
      <div className="mb-8">
        <h1 className="font-display text-2xl font-bold text-foreground flex items-center gap-2">
          <HelpCircle className="w-6 h-6 text-primary" />
          Help &amp; Support
        </h1>
        <p className="text-muted-foreground mt-1">
          Answers to common questions about HealthVault
        </p>
      </div>

      {/* Quick Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        {[
          {
            icon: <BookOpen className="w-5 h-5 text-primary" />,
            title: "Documentation",
            desc: "Guides and how-tos",
          },
          {
            icon: <MessageCircle className="w-5 h-5 text-accent" />,
            title: "Community",
            desc: "Ask other users",
          },
          {
            icon: <Mail className="w-5 h-5 text-primary" />,
            title: "Contact Us",
            desc: "Get direct support",
          },
        ].map((item, i) => (
          <Card
            key={item.title}
            className="border-border shadow-card"
            data-ocid={`contact.resource.item.${i + 1}`}
          >
            <CardContent className="p-4 flex gap-3 items-start">
              <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div>
                <p className="font-medium text-sm text-foreground">
                  {item.title}
                </p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* FAQ */}
      <Card className="border-border shadow-card">
        <CardHeader>
          <CardTitle className="text-base flex items-center gap-2">
            <Shield className="w-4 h-4 text-primary" />
            Frequently Asked Questions
          </CardTitle>
        </CardHeader>
        <CardContent className="divide-y divide-border">
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={item.q}
              className="py-4 first:pt-0 last:pb-0"
              data-ocid={`contact.faq.item.${i + 1}`}
            >
              <p className="font-medium text-sm text-foreground mb-1">
                {item.q}
              </p>
              <p className="text-sm text-muted-foreground">{item.a}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}
