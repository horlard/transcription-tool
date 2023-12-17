import Card from "../../../components/Card";
import tw, { styled } from "twin.macro";
import { useState } from "react";

interface Props {
  onContinue: (n: string) => void;
  transcriptName: string;
}

export default function CreateTranscript(props: Props) {
  const { onContinue, transcriptName } = props;

  const [name, setName] = useState(transcriptName ?? "");

  const nameChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  return (
    <>
      <h1 tw="text-[2.8rem] mobile:text-[2.3rem] font-semibold mb-[20px]">
        What would you like to name your transcript?
      </h1>

      <Card tw="mobile:bg-transparent mobile:border-none">
        <Container>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={nameChangeHandler} />
          </div>

          <button
            onClick={() => onContinue(name)}
            disabled={Boolean(name.length < 3)}
          >
            Continue
          </button>
        </Container>
      </Card>
    </>
  );
}

const Container = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${tw`mobile:p-0`}

  > div > label {
    font-size: 14px;
  }

  > div > input {
    width: 100%;
    border: 1px solid rgba(91, 97, 110, 0.2);
    border-radius: 8px;
    padding: 10px;
    font-size: 16px;
    &:focus {
      outline: 1px solid #000;
    }
    margin-top: 5px;
  }

  > button {
    background: #252dc4e8;
    border: 1px solid #252dc4e8;
    padding: 10px 16px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;

    &:hover {
      background: #252dc4;
    }

    &:disabled {
      opacity: 0.4;
    }
  }
`;
