import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "twin.macro";
import Card from "../../components/Card";
import LoaderContainer from "../../components/LoaderContainer";
import Page from "../../components/Page";
import useGetTranscript from "../../hooks/useGetTranscript";
import { useSpeechSynthesis } from "react-speech-kit";

export default function ConvertToSpeech() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { speak } = useSpeechSynthesis();

  const { isLoading, getTranscript, data } = useGetTranscript(id as string);

  const [isPaused, setIsPaused] = useState(false);
  const [voice, setVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [pitch, setPitch] = useState(1);
  const [rate, setRate] = useState(1);
  //   const [volume, setVolume] = useState(1);

  useEffect(() => {
    const synth = window.speechSynthesis;
    const voices = synth.getVoices();

    setVoice(voices[0]);

    return () => {
      synth.cancel();
    };
  }, [data?.text]);

  const handlePlay = () => {
    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();
    } else {
      speak({ text: data?.text, voice, rate, pitch });
    }

    setIsPaused(false);
  };

  const handlePause = () => {
    const synth = window.speechSynthesis;
    setIsPaused(true);
    synth.pause();
  };

  const handleStop = () => {
    const synth = window.speechSynthesis;
    setIsPaused(false);
    synth.cancel();
  };

  const handleVoiceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const voices = window.speechSynthesis.getVoices();
    //@ts-ignore
    setVoice(voices.find((v) => v.name === event.target.value));
  };

  const handlePitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPitch(parseFloat(event.target.value));
  };

  const handleRateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRate(parseFloat(event.target.value));
  };

  return (
    <LoaderContainer loading={isLoading} onRetry={getTranscript}>
      <Page breadCrumbs={{ label: "Back", onAction: () => navigate(-1) }}>
        <Card>
          <Container>
            <div tw="mb-[20px]">
              <p tw="text-[1.3rem]">{data?.text}</p>
            </div>
            <select value={voice?.name} onChange={handleVoiceChange}>
              {window.speechSynthesis.getVoices().map((voice) => (
                <option key={voice.name} value={voice.name}>
                  {voice.name}
                </option>
              ))}
            </select>
            <div tw=" flex gap-[10px] justify-center">
              <label>
                <p tw="text-center mb-[5px]">Pitch({pitch})</p>
                <input
                  type="range"
                  value={pitch}
                  onChange={handlePitchChange}
                  min="0.5"
                  max="2"
                  step="0.1"
                />
              </label>

              <label>
                <p tw="text-center mb-[5px]">Rate({rate})</p>
                <input
                  type="range"
                  value={rate}
                  onChange={handleRateChange}
                  min="0.5"
                  max="2"
                  step="0.1"
                />
              </label>

              <button onClick={handlePlay}>
                {isPaused ? "Resume" : "Play"}
              </button>
              <button onClick={handlePause}>Pause</button>
              <button onClick={handleStop}>Stop</button>
            </div>
          </Container>
        </Card>
      </Page>
    </LoaderContainer>
  );
}

const Container = styled.div`
  padding: 10px;

  text-align: center;

  input {
    width: 70px;
  }

  select {
    margin-bottom: 10px;
    padding: 5px;
    border: 1px solid #eee;
    border-radius: 3px;

    &:focus {
      outline: none;
    }
  }

  button {
    padding: 5px 10px;
    border: 1px solid #eee;
    border-radius: 3px;
  }
`;
