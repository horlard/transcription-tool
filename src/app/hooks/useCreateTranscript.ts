import { useMutation } from "@tanstack/react-query";
import { createTranscript } from "../api/transcripts";

export default function useCreateTranscript() {
  const { isLoading, error, data, mutate } = useMutation(createTranscript);

  return {
    isLoading,
    createTranscript: mutate,
    data: data?.data,
  };
}
