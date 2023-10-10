import Card from "../../../components/Card";
import RealTime from "../../../assets/images/real-time.jpg";
import tw, { styled } from "twin.macro";

interface Props {
  onContinue: VoidFunction;
  clearName: () => void;
}

export default function CreateTranscript(props: Props) {
  const { onContinue, clearName } = props;

  clearName();

  return (
    <Card>
      <Container>
        <img src={RealTime} alt="real-time" tw="w-[300px] h-[300px]" />
        <button onClick={onContinue}>Create Transcript</button>
      </Container>
    </Card>
  );
}

const Container = styled.div`
  padding: 20px 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  ${tw`mobile:px-[20px]`}

  > img {
    text-align: center;
    align-self: center;
  }

  > button {
    background: #12a633;
    border: 1px solid #12a633;
    padding: 10px 16px;
    border-radius: 5px;
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;

    &:hover {
      background: #077e21;
    }
  }
`;
