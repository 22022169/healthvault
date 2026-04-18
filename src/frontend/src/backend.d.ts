import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ProfileView {
    dateOfBirth: string;
    userId: UserId;
    name: string;
    email: string;
    updatedAt: Timestamp;
    emergencyContactPhone: string;
    emergencyContactName: string;
}
export type UserId = Principal;
export type Timestamp = bigint;
export interface MedicalRecord {
    id: RecordId;
    visitDate: string;
    fileName: string;
    fileSize: bigint;
    fileType: FileType;
    notes?: string;
    hospitalName: string;
    doctorName: string;
    uploadedAt: Timestamp;
    fileKey: string;
}
export interface MedicalRecordInput {
    visitDate: string;
    fileName: string;
    fileSize: bigint;
    fileType: FileType;
    notes?: string;
    hospitalName: string;
    doctorName: string;
    fileKey: string;
}
export interface ProfileInput {
    dateOfBirth: string;
    name: string;
    email: string;
    emergencyContactPhone: string;
    emergencyContactName: string;
}
export type RecordId = bigint;
export enum FileType {
    Insurance = "Insurance",
    TestReport = "TestReport",
    Xray = "Xray",
    DoctorNote = "DoctorNote",
    Other = "Other",
    Prescription = "Prescription"
}
export interface backendInterface {
    createMedicalRecord(input: MedicalRecordInput): Promise<MedicalRecord>;
    deleteMedicalRecord(recordId: RecordId): Promise<boolean>;
    getMyProfile(): Promise<ProfileView | null>;
    getMyRecord(recordId: RecordId): Promise<MedicalRecord | null>;
    listMyRecords(): Promise<Array<MedicalRecord>>;
    upsertMyProfile(input: ProfileInput): Promise<ProfileView>;
}
