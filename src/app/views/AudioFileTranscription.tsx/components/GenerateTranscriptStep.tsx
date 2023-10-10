import { useNavigate } from "react-router-dom";
import tw, { styled } from "twin.macro";
import Typed from "react-typed";

import Card from "../../../components/Card";
import Loader from "../../../components/Loader";
import useCreateTranscript from "../../../hooks/useCreateTranscript";

interface Props {
  transcriptName: string;
  transcript: string;
}

export default function GenerateTranscriptStep(props: Props) {
  const { transcriptName, transcript } = props;

  const { isLoading, createTranscript } = useCreateTranscript();

  const navigate = useNavigate();

  // const newTranscript = ["dfdf"];

  return (
    <Container>
      <h1 tw="text-[2rem] font-semibold mb-[20px] hidden mobile:block">
        {transcriptName}
      </h1>
      <Card>
        <div className="header">
          <h4 tw="mobile:hidden">{transcriptName}</h4>
          <div className="actions">
            <button
              onClick={() => {
                createTranscript(
                  {
                    name: transcriptName,
                    text: transcript,
                    type: "upload",
                  },
                  {
                    onSuccess: () => navigate("/transcripts"),
                  }
                );
              }}
              disabled={isLoading}
            >
              {isLoading ? (
                <Loader size="18" color="#eee" />
              ) : (
                "Save transcript"
              )}
            </button>
          </div>
        </div>
        <div className="main">
          {/* <TypeAnimation
            sequence={[transcript]}
            wrapper="p"
            speed={50}
            cursor={false}
          /> */}
          <Typed
            strings={[transcript]}
            typeSpeed={30}
            showCursor={false}
            tw="text-[1.6rem]"
          />
        </div>
      </Card>
    </Container>
  );
}

const Container = styled.div`
  .main {
    padding: 10px;

    p {
      font-size: 14px;
    }
  }

  .header {
    display: flex;
    padding: 0 10px;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(91, 97, 110, 0.2);

    h4 {
      font-size: 16px;
    }

    .actions {
      display: flex;
      padding: 5px 0;
      gap: 10px;

      ${tw`mobile:justify-end mobile:w-full`}

      button {
        padding: 8px 10px;
        border-radius: 4px;
        border: 1px solid rgba(91, 97, 110, 0.2);
        font-size: 12px;
        font-weight: 600;
        display: flex;
        justify-content: center;

        &:disabled {
          opacity: 0.4;
        }

        &:last-of-type {
          color: #fff;
          background: #12a633;
          border: 1px solid #12a633;
        }
      }
    }
  }
`;
