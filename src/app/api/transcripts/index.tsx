import axios from "axios";
import request from "../request";

const editRequest = axios.create({
  baseURL: "https://transcription-tool-backend.onrender.com/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  },
});

export type createTranscriptPayload = {
  name: string;
  text: string;
  type: "live" | "upload";
};

export interface createTranscriptionResponse extends createTranscriptPayload {
  user_id: string;
}

export interface transcript extends createTranscriptPayload {
  _id: string;
}

const defaultOptions = {
  baseURL: "https://transcription-tool-backend.onrender.com/api",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("access-token")}`,
  },
};

export const createTranscript = (data: createTranscriptPayload) => {
  return request.post<createTranscriptionResponse>("/transcripts", data, {
    ...defaultOptions,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
};

export const getTranscripts = () => {
  return request.get<transcript[]>("/transcripts", {
    ...defaultOptions,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
};

export const getTranscript = (id: string) => {
  return request.get<transcript>(`/transcripts/${id}`, {
    ...defaultOptions,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
};

export const updateTranscript = (id: string, data: createTranscriptPayload) => {
  return editRequest.put<transcript>(`/transcripts/${id}`, data, {
    baseURL: "https://transcription-tool-backend.onrender.com/api",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
};

export const deleteTranscript = (id: string) => {
  return editRequest.delete<transcript>(`/transcripts/${id}`, {
    baseURL: "https://transcription-tool-backend.onrender.com/api",
    headers: {
      Authorization: `Bearer ${localStorage.getItem("access-token")}`,
    },
  });
};
