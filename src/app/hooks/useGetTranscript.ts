import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getTranscript } from "../api/transcripts";
import { useToast } from "../providers/ToastProvider";

export default function useGetTranscript(id: string) {
  const toast = useToast();

  const handleError = (err: AxiosError<any>) => {
    const errorMessage = err.response?.data.message;
    toast("", errorMessage, "error");
  };

  const { isLoading, data, refetch } = useQuery(
    ["getTranscript", { id }],
    () => getTranscript(id),
    {
      enabled: !!id,
    }
  );

  return {
    isLoading,
    data: data?.data,
    getTranscript: refetch,
  };
}
