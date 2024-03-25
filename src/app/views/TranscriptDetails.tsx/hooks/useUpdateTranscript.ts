import { useMutation, useQueryClient } from "@tanstack/react-query";
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
  const queryClient = useQueryClient();
  const { isLoading, mutate, data } = useMutation(
    (data: updateParams) => updateTranscript(data.id, data.data),
    {
      onSuccess: () =>
        queryClient.invalidateQueries({
          queryKey: ["getTranscript"],
        }),
    }
  );

  return {
    isLoading,
    updateTranscript: mutate,
    data: data,
  };
}
