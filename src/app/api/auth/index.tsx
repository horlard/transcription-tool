import request from "../request";

type registerUserPayload = {
  username: string;
  email: string;
  password: string;
};

type loginUserPayload = {
  email: string;
  password: string;
};

export type loginResponse = {
  accessToken: string;
};

export type User = {
  username: string;
  email: string;
  id: string;
};

const defaultOptions = {
  baseURL: "https://transcription-tool-backend.onrender.com/api",
};

export const registerUser = (data: registerUserPayload) => {
  return request.post("/users/register", data, defaultOptions);
};

export const loginUser = (data: loginUserPayload) => {
  return request.post<loginResponse>("/users/login", data, defaultOptions);
};

export const getCurrentUser = () => {
  return request.get<User>("/users/current", {
    ...defaultOptions,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
};
