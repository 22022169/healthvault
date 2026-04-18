import { useActor } from "@caffeineai/core-infrastructure";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { type ExternalBlob, createActor } from "../backend";
import type {
  MedicalRecord,
  MedicalRecordInput,
  ProfileInput,
  ProfileView,
} from "../backend.d.ts";

function useBackendActor() {
  return useActor(createActor);
}

/**
 * Returns a function that uploads an ExternalBlob to object storage
 * and resolves with the raw key bytes (sentinel+hash as Uint8Array).
 * Delegates to the actor's internal _uploadFile which is wired to StorageClient.
 */
export function useUploadFile() {
  const { actor } = useBackendActor();
  return async (blob: ExternalBlob): Promise<Uint8Array> => {
    if (!actor) throw new Error("Not connected");
    // _uploadFile is private in TypeScript but accessible at runtime via the Backend instance
    const backendActor = actor as unknown as {
      _uploadFile: (file: ExternalBlob) => Promise<Uint8Array>;
    };
    return backendActor._uploadFile(blob);
  };
}

export function useProfile() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<ProfileView | null>({
    queryKey: ["profile"],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getMyProfile();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRecords() {
  const { actor, isFetching } = useBackendActor();
  return useQuery<MedicalRecord[]>({
    queryKey: ["records"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.listMyRecords();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useRecord(recordId: bigint | null) {
  const { actor, isFetching } = useBackendActor();
  return useQuery<MedicalRecord | null>({
    queryKey: ["record", recordId?.toString()],
    queryFn: async () => {
      if (!actor || recordId === null) return null;
      return actor.getMyRecord(recordId);
    },
    enabled: !!actor && !isFetching && recordId !== null,
  });
}

export function useMutateRecord() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();

  const createRecord = useMutation<MedicalRecord, Error, MedicalRecordInput>({
    mutationFn: async (input: MedicalRecordInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.createMedicalRecord(input);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["records"] });
    },
  });

  const deleteRecord = useMutation<boolean, Error, bigint>({
    mutationFn: async (recordId: bigint) => {
      if (!actor) throw new Error("Not connected");
      return actor.deleteMedicalRecord(recordId);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["records"] });
    },
  });

  return { createRecord, deleteRecord };
}

export function useMutateProfile() {
  const { actor } = useBackendActor();
  const queryClient = useQueryClient();

  return useMutation<ProfileView, Error, ProfileInput>({
    mutationFn: async (input: ProfileInput) => {
      if (!actor) throw new Error("Not connected");
      return actor.upsertMyProfile(input);
    },
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["profile"] });
    },
  });
}
