import type { backendInterface, FileType, MedicalRecord, ProfileView } from "../backend.d.ts";

const mockProfile: ProfileView = {
  userId: { isAnonymous: () => false, toString: () => "mock-principal", toText: () => "mock-principal", toUint8Array: () => new Uint8Array(), compareTo: () => "eq", _isPrincipal: true } as any,
  name: "Evelyn Reed",
  email: "evelyn.reed@example.com",
  dateOfBirth: "1998-04-15",
  emergencyContactName: "James Reed",
  emergencyContactPhone: "+1-555-0100",
  updatedAt: BigInt(Date.now()) * BigInt(1_000_000),
};

const mockRecords: MedicalRecord[] = [
  {
    id: BigInt(1),
    visitDate: "2024-01-15",
    fileName: "Annual_Checkup_2024.pdf",
    fileSize: BigInt(204800),
    fileType: "TestReport" as unknown as FileType,
    notes: "Routine annual health checkup — all values normal.",
    hospitalName: "City General Hospital",
    doctorName: "Dr. Sarah Chen",
    uploadedAt: BigInt(Date.now()) * BigInt(1_000_000),
    fileKey: "mock-file-key-1",
  },
  {
    id: BigInt(2),
    visitDate: "2024-03-22",
    fileName: "Blood_Test_Results_March.pdf",
    fileSize: BigInt(102400),
    fileType: "TestReport" as unknown as FileType,
    notes: "Complete blood count and metabolic panel.",
    hospitalName: "Downtown Medical Center",
    doctorName: "Dr. Michael Torres",
    uploadedAt: BigInt(Date.now()) * BigInt(1_000_000),
    fileKey: "mock-file-key-2",
  },
];

export const mockBackend: backendInterface = {
  getMyProfile: async () => mockProfile,
  listMyRecords: async () => mockRecords,
  getMyRecord: async (recordId) =>
    mockRecords.find((r) => r.id === recordId) ?? null,
  createMedicalRecord: async (input) => ({
    ...input,
    id: BigInt(Date.now()),
    uploadedAt: BigInt(Date.now()) * BigInt(1_000_000),
  }),
  deleteMedicalRecord: async () => true,
  upsertMyProfile: async (input) => ({
    ...mockProfile,
    ...input,
  }),
};
