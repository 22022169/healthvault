import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  Activity,
  ChevronRight,
  Clock,
  FileText,
  Heart,
  Lock,
  Search,
  Shield,
  Upload,
  Users,
} from "lucide-react";

const features = [
  {
    emoji: "🔒",
    title: "Secure & Encrypted",
    description:
      "All your medical records are encrypted at rest using industry-standard AES-256 encryption. Your data stays private — always.",
    bg: "bg-primary/10",
  },
  {
    emoji: "📤",
    title: "Upload from Anywhere",
    description:
      "Add records from any device, any format — PDFs, images, X-rays, scanned documents. No special software needed.",
    bg: "bg-accent/10",
  },
  {
    emoji: "🔍",
    title: "Search & Organize",
    description:
      "Find any record instantly by keyword, doctor, hospital, date, or diagnosis. Everything organized the way you think.",
    bg: "bg-primary/10",
  },
];

const stats = [
  { label: "100% Private", description: "Zero third-party data sharing" },
  {
    label: "Multiple File Formats",
    description: "PDF, JPG, PNG, DICOM & more",
  },
  { label: "Instant Search", description: "Find any record in seconds" },
];

const testimonials = [
  {
    quote:
      "Having all my records in one secure place has been life-changing. My doctors can now see my complete history instantly.",
    name: "Sarah M.",
    role: "Patient, Cardiac Care",
    initials: "SM",
  },
  {
    quote:
      "I travel frequently and having my medical history accessible anywhere gives me real peace of mind.",
    name: "James T.",
    role: "Patient, General Practice",
    initials: "JT",
  },
  {
    quote:
      "The emergency access feature saved critical time when my father was admitted to hospital abroad.",
    name: "Priya K.",
    role: "Caregiver",
    initials: "PK",
  },
];

const steps = [
  {
    step: "01",
    title: "Create your account",
    description:
      "Sign up securely with two-factor authentication enabled from day one.",
  },
  {
    step: "02",
    title: "Upload your records",
    description:
      "Add prescriptions, lab reports, X-rays, and more from any device.",
  },
  {
    step: "03",
    title: "Access anywhere, anytime",
    description:
      "View, share, and manage your complete health history at any moment.",
  },
];

const highlights = [
  { icon: Clock, label: "Timeline View", desc: "Complete medical history" },
  {
    icon: Shield,
    label: "Emergency Access",
    desc: "Critical info, always available",
  },
  { icon: Users, label: "Doctor Sharing", desc: "Secure one-click sharing" },
  { icon: Activity, label: "Med Reminders", desc: "Never miss a dose" },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen" data-ocid="home.page">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-card border-b">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/5 -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[360px] h-[360px] rounded-full bg-accent/5 translate-y-1/2 -translate-x-1/4 blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32">
          <div className="flex flex-col lg:flex-row lg:items-center lg:gap-16">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <Badge
                variant="outline"
                className="mb-6 inline-flex items-center gap-2 border-primary/30 text-primary bg-primary/5 px-3 py-1.5"
              >
                <Activity className="w-3.5 h-3.5" />
                Your personal health vault
              </Badge>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-6">
                Your Health Records,{" "}
                <span className="text-primary">Secured</span> in One Place
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Store, organize, and access all your medical records from every
                doctor and hospital — securely encrypted, always at your
                fingertips.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <Button
                  asChild
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8 h-12 shadow-elevated transition-smooth"
                  data-ocid="hero.primary_button"
                >
                  <Link to="/login">
                    Get Started Free
                    <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-border text-foreground hover:bg-muted font-medium px-8 h-12 transition-smooth"
                  data-ocid="hero.secondary_button"
                >
                  <Link to="/login">Sign In</Link>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Shield className="w-4 h-4 text-accent" />
                  AES-256 Encrypted
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5">
                  <Lock className="w-4 h-4 text-accent" />
                  HIPAA Compliant
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-border" />
                <span className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-accent" />
                  Trusted by thousands
                </span>
              </div>
            </div>

            {/* Dashboard preview */}
            <div className="flex-shrink-0 mt-12 lg:mt-0 lg:w-[400px]">
              <HeroDashboardPreview />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-primary py-5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-0 sm:divide-x divide-primary-foreground/20">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center sm:px-8 py-1 sm:py-0"
                data-ocid="stats.item"
              >
                <p className="text-primary-foreground font-bold text-lg">
                  {stat.label}
                </p>
                <p className="text-primary-foreground/70 text-sm mt-0.5">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-background py-20" id="features">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-accent/30 text-accent bg-accent/5"
            >
              Everything you need
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Built for your peace of mind
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              HealthVault gives you a single secure home for your complete
              medical history — designed for patients, trusted by caregivers.
            </p>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="features.list"
          >
            {features.map((feature, i) => (
              <Card
                key={feature.title}
                className="border-border shadow-card hover:shadow-elevated transition-smooth group"
                data-ocid={`features.item.${i + 1}`}
              >
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 transition-smooth group-hover:scale-110`}
                  >
                    <span className="text-2xl">{feature.emoji}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-muted/40 py-20 border-y" id="how-it-works">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-primary/30 text-primary bg-primary/5"
            >
              Simple process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Up and running in minutes
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Three simple steps to a complete, secure health record system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {steps.map((step, i) => (
              <div
                key={step.step}
                className="flex flex-col items-center text-center"
                data-ocid={`steps.item.${i + 1}`}
              >
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center mb-5 shadow-elevated">
                  <span className="text-primary-foreground font-bold text-lg">
                    {step.step}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-background py-20" id="testimonials">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <Badge
              variant="outline"
              className="mb-4 border-accent/30 text-accent bg-accent/5"
            >
              Real patients, real stories
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Trusted by patients everywhere
            </h2>
          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            data-ocid="testimonials.list"
          >
            {testimonials.map((t, i) => (
              <Card
                key={t.name}
                className="border-border shadow-card"
                data-ocid={`testimonials.item.${i + 1}`}
              >
                <CardContent className="p-6 flex flex-col gap-4">
                  <div className="flex items-start gap-0.5 text-accent">
                    {["1", "2", "3", "4", "5"].map((si) => (
                      <span key={si} className="text-lg leading-none">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3 pt-2 border-t border-border">
                    <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-semibold text-xs">
                        {t.initials}
                      </span>
                    </div>
                    <div className="min-w-0">
                      <p className="text-foreground font-medium text-sm truncate">
                        {t.name}
                      </p>
                      <p className="text-muted-foreground text-xs truncate">
                        {t.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights strip */}
      <section className="bg-muted/40 border-y py-14">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-2"
                data-ocid={`highlights.item.${i + 1}`}
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground text-sm">
                  {item.label}
                </p>
                <p className="text-muted-foreground text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-primary py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 rounded-2xl bg-primary-foreground/10 flex items-center justify-center mx-auto mb-6">
            <Heart className="w-7 h-7 text-primary-foreground" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-4">
            Ready to take control of your health?
          </h2>
          <p className="text-primary-foreground/75 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of patients who've already secured their complete
            medical history in one safe, accessible place.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-10 h-12 shadow-elevated transition-smooth"
              data-ocid="cta.primary_button"
            >
              <Link to="/login">
                Create Free Account
                <ChevronRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="lg"
              className="text-primary-foreground hover:bg-primary-foreground/10 font-medium px-8 h-12 transition-smooth"
              data-ocid="cta.secondary_button"
            >
              <Link to="/contact">Have questions? Contact us</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

function HeroDashboardPreview() {
  return (
    <div className="relative">
      <div className="rounded-2xl border border-border bg-card shadow-elevated overflow-hidden">
        {/* Mini header */}
        <div className="bg-primary px-4 py-3 flex items-center justify-between">
          <span className="text-primary-foreground font-bold text-sm tracking-tight">
            HealthVault
          </span>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-accent" />
            <div className="w-5 h-5 rounded-full bg-primary-foreground/20" />
          </div>
        </div>

        <div className="p-4 space-y-3 bg-muted/20">
          {/* Personal details */}
          <div className="bg-card rounded-lg p-3 border border-border shadow-card">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-foreground">
                Personal Details
              </span>
              <span className="text-xs text-accent font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
                Active
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-primary text-xs font-bold">ER</span>
              </div>
              <div className="min-w-0">
                <p className="text-foreground text-xs font-medium truncate">
                  Evelyn Reed
                </p>
                <p className="text-muted-foreground text-xs">
                  Age 26 · info@example.com
                </p>
              </div>
            </div>
          </div>

          {/* Recent reports */}
          <div className="bg-card rounded-lg p-3 border border-border shadow-card">
            <p className="text-xs font-semibold text-foreground mb-2">
              Recent Reports
            </p>
            {["Annual Checkup", "Blood Test Result"].map((name) => (
              <div
                key={name}
                className="flex items-center justify-between py-1"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <FileText className="w-3 h-3 text-accent flex-shrink-0" />
                  <span className="text-xs text-foreground truncate">
                    {name}
                  </span>
                </div>
                <span className="text-[10px] bg-accent/15 text-accent font-medium rounded px-1.5 py-0.5 flex-shrink-0 ml-2">
                  Success
                </span>
              </div>
            ))}
          </div>

          {/* Appointment */}
          <div className="bg-card rounded-lg p-3 border border-border shadow-card">
            <p className="text-xs font-semibold text-foreground mb-2">
              Upcoming Appointments
            </p>
            <div className="text-xs text-foreground font-medium">
              Dr. Evelyn Reed (Cardiology)
            </div>
            <div className="text-xs text-muted-foreground mb-2">
              Oct 28, 2026 at 10:00 AM
            </div>
            <span className="text-[10px] bg-accent text-accent-foreground font-medium rounded-full px-2 py-0.5">
              Appointment
            </span>
          </div>
        </div>
      </div>

      {/* Floating badge */}
      <div className="absolute -bottom-3 -right-3 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1.5 rounded-full shadow-elevated">
        🔒 Encrypted
      </div>
    </div>
  );
}
