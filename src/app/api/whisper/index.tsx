import request from "../request";

export const transcribeAudio = (data: FormData) => {
  return request.post("/transcriptions", data, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer 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`,
    },
  });
};
