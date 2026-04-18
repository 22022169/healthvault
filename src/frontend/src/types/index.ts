import type { MedicalRecord, ProfileView } from "../backend.d.ts";

export type { MedicalRecord, ProfileView };

export enum FileType {
  Prescription = "Prescription",
  TestReport = "TestReport",
  Xray = "Xray",
  Insurance = "Insurance",
  DoctorNote = "DoctorNote",
  Other = "Other",
}

export interface PatientProfile {
  name: string;
  dateOfBirth: string;
  email: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
}

export const FILE_TYPE_LABELS: Record<FileType, string> = {
  [FileType.Prescription]: "Prescription",
  [FileType.TestReport]: "Test Report",
  [FileType.Xray]: "X-Ray",
  [FileType.Insurance]: "Insurance",
  [FileType.DoctorNote]: "Doctor Note",
  [FileType.Other]: "Other",
};

export const FILE_TYPE_COLORS: Record<
  FileType,
  { bg: string; text: string; border: string }
> = {
  [FileType.Prescription]: {
    bg: "bg-primary/10",
    text: "text-primary",
    border: "border-primary/20",
  },
  [FileType.TestReport]: {
    bg: "bg-accent/10",
    text: "text-accent",
    border: "border-accent/20",
  },
  [FileType.Xray]: {
    bg: "bg-secondary/10",
    text: "text-secondary-foreground",
    border: "border-secondary/20",
  },
  [FileType.Insurance]: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border",
  },
  [FileType.DoctorNote]: {
    bg: "bg-primary/5",
    text: "text-primary",
    border: "border-primary/10",
  },
  [FileType.Other]: {
    bg: "bg-muted",
    text: "text-muted-foreground",
    border: "border-border",
  },
};
