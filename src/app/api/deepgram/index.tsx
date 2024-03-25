import request from "../request";

export const transcribeAudio = (data: FormData) => {
  return request.post("/listen", data, {
    headers: {
      Authorization: `Token ${process.env.REACT_APP_DEEPGRAM_KEY}`,
    },
    params: {
      model: "nova-2",
      smart_format: true,
    },
  });
};
