import request from "../request";

export const transcribeAudio = (data: FormData) => {
  return request.post("/transcriptions", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer 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`,
    },
  });
};
