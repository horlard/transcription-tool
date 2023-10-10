import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../../api/auth";
import { useToast } from "../../../providers/ToastProvider";

export default function useLoginUser() {
  const toast = useToast();

  const navigate = useNavigate();

  const onSuccessHandler = () => {
    toast("", "Login Successful", "success");
    navigate("/dashboard");
  };

  const handleError = (err: AxiosError<any>) => {
    const errorMessage = err.response?.data.message;
    toast("", errorMessage, "error");
  };
  const { isLoading, data, mutate, error } = useMutation(loginUser, {
    onError: handleError,
    onSuccess: onSuccessHandler,
  });

  return {
    isLoading,
    data: data?.data.accessToken,
    loginUser: mutate,
    error: error,
  };
}
