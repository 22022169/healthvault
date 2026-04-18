import { Link } from "@tanstack/react-router";
import {
  Building2,
  Calendar,
  ClipboardList,
  Edit2,
  HardDrive,
  Pill,
  PlusCircle,
  Save,
  Shield,
  Upload,
  User,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import type { ProfileInput, ProfileView } from "../backend.d.ts";
import { RecordCard } from "../components/RecordCard";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Skeleton } from "../components/ui/skeleton";
import { useAuth } from "../hooks/useAuth";
import { useMutateProfile, useProfile, useRecords } from "../hooks/useBackend";
import type { MedicalRecord } from "../types/index";

// ─── Helpers ──────────────────────────────────────────────────────────────────

function formatBytes(bytes: bigint): string {
  const n = Number(bytes);
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  if (n < 1024 * 1024 * 1024) return `${(n / (1024 * 1024)).toFixed(1)} MB`;
  return `${(n / (1024 * 1024 * 1024)).toFixed(2)} GB`;
}

function formatDob(dateStr: string): string {
  if (!dateStr) return "—";
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

// ─── Mock data (displayed while no real data exists) ─────────────────────────

const MOCK_APPOINTMENTS = [
  {
    title: "Annual Physical Exam",
    doctor: "Dr. Sarah Chen",
    date: "May 15, 2026",
    time: "10:00 AM",
  },
  {
    title: "Cardiology Follow-up",
    doctor: "Dr. James Patel",
    date: "May 28, 2026",
    time: "2:30 PM",
  },
];

const MOCK_MEDICATIONS = [
  {
    name: "Lisinopril",
    dose: "10mg",
    frequency: "Once daily",
    start: "Jan 15",
  },
  {
    name: "Metformin",
    dose: "500mg",
    frequency: "Twice daily",
    start: "Mar 3",
  },
];

// ─── Stat Card ────────────────────────────────────────────────────────────────

interface StatCardProps {
  label: string;
  value: string | number;
  icon: React.ReactNode;
  loading: boolean;
  ocid: string;
}

function StatCard({ label, value, icon, loading, ocid }: StatCardProps) {
  return (
    <Card className="border-border shadow-card" data-ocid={ocid}>
      <CardContent className="p-5">
        <div className="flex items-center justify-between gap-2">
          <div className="min-w-0">
            {loading ? (
              <>
                <Skeleton className="h-7 w-16 mb-1" />
                <Skeleton className="h-4 w-24" />
              </>
            ) : (
              <>
                <p className="text-2xl font-bold text-foreground leading-tight">
                  {value}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
              </>
            )}
          </div>
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// ─── Profile Section ──────────────────────────────────────────────────────────

interface ProfileSectionProps {
  profile: ProfileView | null | undefined;
  loading: boolean;
}

function ProfileSection({ profile, loading }: ProfileSectionProps) {
  const mutate = useMutateProfile();
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState<ProfileInput>({
    name: "",
    dateOfBirth: "",
    email: "",
    emergencyContactName: "",
    emergencyContactPhone: "",
  });

  function startEdit() {
    setForm({
      name: profile?.name ?? "",
      dateOfBirth: profile?.dateOfBirth ?? "",
      email: profile?.email ?? "",
      emergencyContactName: profile?.emergencyContactName ?? "",
      emergencyContactPhone: profile?.emergencyContactPhone ?? "",
    });
    setEditing(true);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSave() {
    mutate.mutate(form, { onSuccess: () => setEditing(false) });
  }

  return (
    <Card className="border-border shadow-card" data-ocid="profile.card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <User className="w-4 h-4 text-primary" />
            Patient Profile
          </CardTitle>
          {!editing && !loading && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="gap-1.5"
              onClick={startEdit}
              data-ocid="profile.edit_button"
            >
              <Edit2 className="w-3.5 h-3.5" />
              Edit
            </Button>
          )}
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <div className="space-y-3">
            <Skeleton className="h-5 w-48" />
            <Skeleton className="h-4 w-64" />
            <Skeleton className="h-4 w-56" />
            <Skeleton className="h-4 w-40" />
          </div>
        ) : editing ? (
          <div className="space-y-4" data-ocid="profile.edit_form">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  data-ocid="profile.name_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="dateOfBirth">Date of Birth</Label>
                <Input
                  id="dateOfBirth"
                  name="dateOfBirth"
                  type="date"
                  value={form.dateOfBirth}
                  onChange={handleChange}
                  data-ocid="profile.dob_input"
                />
              </div>
              <div className="space-y-1.5 sm:col-span-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  data-ocid="profile.email_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="emergencyContactName">Emergency Contact</Label>
                <Input
                  id="emergencyContactName"
                  name="emergencyContactName"
                  value={form.emergencyContactName}
                  onChange={handleChange}
                  placeholder="Contact name"
                  data-ocid="profile.emergency_name_input"
                />
              </div>
              <div className="space-y-1.5">
                <Label htmlFor="emergencyContactPhone">Phone</Label>
                <Input
                  id="emergencyContactPhone"
                  name="emergencyContactPhone"
                  value={form.emergencyContactPhone}
                  onChange={handleChange}
                  placeholder="+1 555 000 0000"
                  data-ocid="profile.emergency_phone_input"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-1">
              <Button
                type="button"
                size="sm"
                className="gap-1.5"
                onClick={handleSave}
                disabled={mutate.isPending}
                data-ocid="profile.save_button"
              >
                <Save className="w-3.5 h-3.5" />
                {mutate.isPending ? "Saving…" : "Save Changes"}
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="gap-1.5"
                onClick={() => setEditing(false)}
                disabled={mutate.isPending}
                data-ocid="profile.cancel_button"
              >
                <X className="w-3.5 h-3.5" />
                Cancel
              </Button>
            </div>

            {mutate.isError && (
              <p
                className="text-sm text-destructive"
                data-ocid="profile.error_state"
              >
                Failed to save. Please try again.
              </p>
            )}
          </div>
        ) : profile ? (
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <User className="w-5 h-5 text-primary" />
              </div>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">{profile.name}</p>
                <p className="text-sm text-muted-foreground truncate">
                  {profile.email}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-y-2 text-sm border-t border-border pt-3">
              <div className="flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <span className="text-muted-foreground">Born:</span>
                <span className="font-medium text-foreground">
                  {formatDob(profile.dateOfBirth)}
                </span>
              </div>
              {profile.emergencyContactName && (
                <div className="flex items-center gap-2">
                  <Users className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                  <span className="text-muted-foreground">Emergency:</span>
                  <span className="font-medium text-foreground">
                    {profile.emergencyContactName}
                    {profile.emergencyContactPhone
                      ? ` · ${profile.emergencyContactPhone}`
                      : ""}
                  </span>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col items-center text-center py-6 gap-3"
            data-ocid="profile.empty_state"
          >
            <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
              <User className="w-6 h-6 text-muted-foreground" />
            </div>
            <div>
              <p className="font-medium text-foreground text-sm">
                Profile not set up
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Add your details so healthcare providers can identify you.
              </p>
            </div>
            <Button
              type="button"
              size="sm"
              onClick={startEdit}
              data-ocid="profile.setup_button"
            >
              Set Up Profile
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─── Recent Records Section ───────────────────────────────────────────────────

interface RecentRecordsSectionProps {
  records: MedicalRecord[] | undefined;
  loading: boolean;
}

function RecentRecordsSection({ records, loading }: RecentRecordsSectionProps) {
  const recent = records?.slice(0, 5) ?? [];

  return (
    <Card className="border-border shadow-card" data-ocid="recent_records.card">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between gap-3">
          <CardTitle className="text-base font-semibold flex items-center gap-2">
            <ClipboardList className="w-4 h-4 text-primary" />
            Recent Records
          </CardTitle>
          <div className="flex items-center gap-1.5">
            <Link to="/history">
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="text-primary hover:text-primary text-xs"
                data-ocid="recent_records.view_all_link"
              >
                View All
              </Button>
            </Link>
            <Link to="/upload">
              <Button
                type="button"
                size="sm"
                className="gap-1.5"
                data-ocid="recent_records.upload_button"
              >
                <PlusCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Upload</span>
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>

      <CardContent>
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-20 w-full rounded-lg" />
            ))}
          </div>
        ) : recent.length === 0 ? (
          <div
            className="flex flex-col items-center text-center py-8 gap-3"
            data-ocid="recent_records.empty_state"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
              <Upload className="w-7 h-7 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">
                No records yet
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Upload your first medical document to get started.
              </p>
            </div>
            <Link to="/upload">
              <Button
                type="button"
                size="sm"
                className="gap-2 mt-1"
                data-ocid="recent_records.first_upload_button"
              >
                <Upload className="w-4 h-4" />
                Upload your first record
              </Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-3">
            {recent.map((record, idx) => (
              <RecordCard
                key={String(record.id)}
                record={record}
                index={idx + 1}
              />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}

// ─── Dashboard ────────────────────────────────────────────────────────────────

export default function Dashboard() {
  const { isAuthenticated } = useAuth();
  const { data: profile, isLoading: profileLoading } = useProfile();
  const { data: records, isLoading: recordsLoading } = useRecords();

  const totalRecords = records?.length ?? 0;
  const storageUsed =
    records?.reduce((acc, r) => acc + r.fileSize, BigInt(0)) ?? BigInt(0);
  const uniqueDoctors = new Set(records?.map((r) => r.doctorName)).size;
  const uniqueHospitals = new Set(records?.map((r) => r.hospitalName)).size;

  const welcomeName = profile?.name
    ? `Welcome back, ${profile.name.split(" ")[0]}!`
    : "Welcome to HealthVault";

  const statsLoading = recordsLoading || !isAuthenticated;

  return (
    <div className="min-h-screen bg-background" data-ocid="dashboard.page">
      {/* Page header */}
      <div className="bg-card border-b border-border px-4 sm:px-6 py-5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1
              className="text-xl sm:text-2xl font-bold font-display text-foreground"
              data-ocid="dashboard.welcome_banner"
            >
              {profileLoading ? (
                <Skeleton className="h-7 w-52 inline-block" />
              ) : (
                welcomeName
              )}
            </h1>
            <p className="text-sm text-muted-foreground mt-0.5">
              Your personal health records hub
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="hidden sm:flex items-center gap-1.5 border-primary/30 text-primary bg-primary/5"
            >
              <Shield className="w-3 h-3" />
              Encrypted & Secure
            </Badge>
            <Link to="/upload">
              <Button
                type="button"
                size="sm"
                className="gap-1.5"
                data-ocid="dashboard.upload_cta"
              >
                <Upload className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Upload Record</span>
                <span className="sm:hidden">Upload</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 space-y-6">
        {/* Stats row */}
        <section
          aria-label="Summary statistics"
          data-ocid="dashboard.stats_section"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
              label="Total Records"
              value={totalRecords}
              icon={<ClipboardList className="w-5 h-5 text-primary" />}
              loading={statsLoading}
              ocid="stats.total_records"
            />
            <StatCard
              label="Storage Used"
              value={formatBytes(storageUsed)}
              icon={<HardDrive className="w-5 h-5 text-primary" />}
              loading={statsLoading}
              ocid="stats.storage_used"
            />
            <StatCard
              label="Doctors"
              value={uniqueDoctors}
              icon={<User className="w-5 h-5 text-primary" />}
              loading={statsLoading}
              ocid="stats.doctors"
            />
            <StatCard
              label="Hospitals"
              value={uniqueHospitals}
              icon={<Building2 className="w-5 h-5 text-primary" />}
              loading={statsLoading}
              ocid="stats.hospitals"
            />
          </div>
        </section>

        {/* Profile + Recent Records */}
        <section
          aria-label="Profile and recent records"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          data-ocid="dashboard.main_section"
        >
          <ProfileSection profile={profile} loading={profileLoading} />
          <RecentRecordsSection records={records} loading={recordsLoading} />
        </section>

        {/* Appointments + Medications */}
        <section
          aria-label="Appointments and medications"
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          data-ocid="dashboard.secondary_section"
        >
          {/* Upcoming Appointments */}
          <Card
            className="border-border shadow-card"
            data-ocid="dashboard.appointments.card"
          >
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Upcoming Appointments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {MOCK_APPOINTMENTS.map((appt, i) => (
                  <div
                    key={appt.title}
                    className="flex items-start gap-3 p-3 bg-muted/40 rounded-lg"
                    data-ocid={`dashboard.appointment.item.${i + 1}`}
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Calendar className="w-4 h-4 text-primary" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-medium text-foreground">
                        {appt.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {appt.doctor}
                      </p>
                      <p className="text-xs text-primary mt-0.5">
                        {appt.date} at {appt.time}
                      </p>
                    </div>
                    <Badge
                      variant="outline"
                      className="text-xs bg-accent/10 text-accent border-accent/20 shrink-0"
                    >
                      Upcoming
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Active Medications */}
          <Card
            className="border-border shadow-card"
            data-ocid="dashboard.medications.card"
          >
            <CardHeader className="pb-3 flex flex-row items-center justify-between">
              <CardTitle className="text-base font-semibold flex items-center gap-2">
                <Pill className="w-4 h-4 text-primary" />
                Active Medications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {MOCK_MEDICATIONS.map((med, i) => (
                  <div
                    key={med.name}
                    className="pb-3 border-b border-border last:border-0 last:pb-0"
                    data-ocid={`dashboard.medication.item.${i + 1}`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-sm font-semibold text-foreground">
                        {med.name} — {med.dose}
                      </p>
                      <Badge
                        variant="outline"
                        className="text-xs bg-accent/10 text-accent border-accent/20 shrink-0"
                      >
                        Active
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      {med.frequency} · Started {med.start}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
