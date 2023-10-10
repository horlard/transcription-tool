import request from "../request";

export const transcribeAudio = (data: FormData) => {
  return request.post("/transcriptions", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer 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`,
    },
  });
};
