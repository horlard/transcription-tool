import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getCurrentUser } from "../api/auth";

const useGetUser = () => {
  const { data, status, error, refetch, isFetching, isLoading } = useQuery(
    ["user"],
    getCurrentUser
  );

  return {
    user: data?.data,
    status,
    error: error
      ? (error as AxiosError<{ title: string; message: string }>)
      : undefined,
    getUser: refetch,
    isFetching,
    isLoading,
  };
};

export default useGetUser;
