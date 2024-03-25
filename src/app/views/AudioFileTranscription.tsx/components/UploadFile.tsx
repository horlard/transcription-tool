import { ChangeEvent, useState } from "react";
import { styled } from "twin.macro";

import { ReactComponent as Upload } from "../../../assets/icons/upload.svg";

import Card from "../../../components/Card";
import Loader from "../../../components/Loader";
import useGenerateTranscript from "../hooks/useGenerateTranscript";

interface Props {
  onContinue: (t: string) => void;
}

export default function UploadFile(props: Props) {
  const { onContinue } = props;

  const { isLoading, transcribeAudio } = useGenerateTranscript();

  const onSubmit = () => {
    transcribeAudio(formData as FormData, {
      onSuccess(data) {
        onContinue(data.data.results.channels[0].alternatives[0].transcript);
      },
    });
  };

  const [formData, setFormData] = useState<FormData | null>(null);

  const [selectedFile, setSelectedFile] = useState<File>();

  const handleFile = async (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      const data = new FormData();
      data.append("file", file);
      setFormData(data);
      setSelectedFile(e.target.files[0]);

      console.log(e.target.files[0]);

      // check if the size is less than 25MB
      if (file.size > 25 * 1024 * 1024) {
        alert("Please upload an audio file less than 25MB");
        return;
      }
    }
  };

  const disableBtn = Boolean(
    isLoading || (selectedFile?.size as number) > 25 * 1024 * 1024
  );

  return (
    <Container>
      <Card>
        <div
          className="main"
          onClick={() =>
            document.querySelector<HTMLElement>(".audio-upload")?.click()
          }
        >
          <Upload />
          <input
            type="file"
            accept="audio/*"
            onChange={handleFile}
            hidden
            className="audio-upload"
          />
          <p>
            Click to upload audio file <br />
            <span>
              (supported formats flac, mp3, mp4, mpeg, mpga, m4a, ogg, wav, or
              webm.)
            </span>
          </p>
          {selectedFile ? (
            <div>
              <div>{selectedFile?.name}</div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSubmit();
                }}
                disabled={disableBtn}
              >
                {isLoading ? (
                  <Loader color="#eee" size="10" />
                ) : (
                  "Generate transcript"
                )}
              </button>
            </div>
          ) : null}
        </div>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  .main {
    padding: 40px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 5px;

    button {
      background: #252dc4e8;
      border: 1px solid #252dc4e8;
      padding: 5px 10px;
      border-radius: 5px;
      color: #fff;
      display: flex;
      justify-content: center;

      &:hover {
        background: #252dc4;
      }

      &:disabled {
        opacity: 0.4;
      }
    }

    > div {
      background-color: #fff;
      border: 1px solid rgba(91, 97, 110, 0.2);
      border-radius: 8px;
      padding: 10px 10px;
      align-items: center;
      margin-top: 20px;
      gap: 20px;
      display: flex;
    }

    p {
      text-align: center;
      font-size: 16px;
      span {
        font-size: 10px;
      }
    }

    svg {
      width: 70px;
      height: 70px;
    }
  }
`;
