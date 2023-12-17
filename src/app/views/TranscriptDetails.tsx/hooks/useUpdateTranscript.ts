import { useMutation } from "@tanstack/react-query";
import { updateTranscript } from "../../../api/transcripts";

type updateParams = {
  id: string;
  data: {
    name: string;
    text: string;
    type: "live" | "upload";
  };
};

export default function useUpdateTranscript() {
  const { isLoading, mutate, data } = useMutation((data: updateParams) =>
    updateTranscript(data.id, data.data)
  );

  return {
    isLoading,
    updateTranscript: mutate,
    data: data,
  };
}
