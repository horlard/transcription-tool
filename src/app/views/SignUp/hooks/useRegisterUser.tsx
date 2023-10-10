import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../api/auth";
import { useToast } from "../../../providers/ToastProvider";

export default function useLoginUser() {
  const toast = useToast();

  const navigate = useNavigate();

  const onSuccessHandler = () => {
    toast("", "User Successfully Created", "success");
    navigate("/login");
  };

  const handleError = (err: AxiosError<any>) => {
    const errorMessage = err.response?.data.message;
    toast("", errorMessage, "error");
  };

  const { isLoading, data, mutate, error } = useMutation(registerUser, {
    onError: handleError,
    onSuccess: onSuccessHandler,
  });

  return {
    isLoading,
    data: data,
    registerUser: mutate,
    error: error,
  };
}
