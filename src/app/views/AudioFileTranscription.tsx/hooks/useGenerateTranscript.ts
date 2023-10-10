import { useMutation } from "@tanstack/react-query";
import { transcribeAudio } from "../../../api/whisper";

export default function useGenerateTranscript() {
  const { isLoading, error, mutate, data } = useMutation(transcribeAudio);

  return {
    isLoading,
    error,
    transcribeAudio: mutate,
    data: data,
  };
}
