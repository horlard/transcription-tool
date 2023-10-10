import { useMutation } from "@tanstack/react-query";
import { deleteTranscript } from "../../../api/transcripts";

export default function useDeleteTranscript() {
  const { isLoading, mutate } = useMutation((id: string) =>
    deleteTranscript(id)
  );

  return {
    isLoading,
    deleteTranscript: mutate,
  };
}
