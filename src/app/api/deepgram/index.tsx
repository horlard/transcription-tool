import request from "../request";

const DEEPGRAM_KEY = process.env.REACT_APP_DEEPGRAM_KEY;
export const transcribeAudio = (data: FormData) => {
  return request.post("/listen", data, {
    headers: {
      Authorization: `Token ${DEEPGRAM_KEY}`,
    },
    params: {
      model: "nova-2",
      smart_format: true,
    },
  });
};
