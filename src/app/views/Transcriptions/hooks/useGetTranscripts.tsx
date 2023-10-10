import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getTranscripts } from "../../../api/transcripts";

export default function useGetTranscripts() {
  const { isLoading, refetch, error, data, status } = useQuery(
    ["getTranscripts"],
    getTranscripts
  );

  return {
    isLoading,
    status,
    getTranscripts: refetch,
    error: error
      ? (error as AxiosError<{ title: string; message: string }>)
      : undefined,
    data: data?.data,
  };
}
