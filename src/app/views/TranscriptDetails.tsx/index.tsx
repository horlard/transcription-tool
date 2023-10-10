import { useEffect, useState } from "react";
import { jsPDF } from "jspdf";
import { useNavigate, useParams } from "react-router-dom";
import { styled } from "twin.macro";
import Card from "../../components/Card";
import Loader from "../../components/Loader";
import LoaderContainer from "../../components/LoaderContainer";
import Page from "../../components/Page";
import useDeleteTranscript from "./hooks/useDeleteTranscript";
import useGetTranscript from "../../hooks/useGetTranscript";
import useUpdateTranscript from "./hooks/useUpdateTranscript";

export default function TransactionDetails() {
  const { id } = useParams();

  const {
    isLoading: getLoading,
    getTranscript,
    data,
  } = useGetTranscript(id as string);

  const { isLoading: updateLoading, updateTranscript } = useUpdateTranscript();

  const { isLoading: deleteLoading, deleteTranscript } = useDeleteTranscript();

  useEffect(() => {
    setTranscript(data?.text);
  }, [data?.text]);

  const navigate = useNavigate();

  const newTranscript = data?.text && data?.text;

  const [transcript, setTranscript] = useState(newTranscript);

  const onChangeHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscript(e.target.value);
  };

  const exportTranscript = () => {
    const doc = new jsPDF();

    const splitTitle = doc.splitTextToSize(data?.text as string, 180);

    doc.text(splitTitle, 10, 10);
    doc.save(`${data?.name}.pdf`);
  };

  return (
    <LoaderContainer loading={getLoading} onRetry={getTranscript}>
      <Page
        title={
          <h1 tw="flex justify-between text-[2.8rem] font-semibold items-center">
            {data?.name}{" "}
            <button
              onClick={() => navigate(`/convert-to-speech/${data?._id}`)}
              tw="text-[1.3rem] font-normal border border-[#ddd] p-[10px] rounded-[5px]"
            >
              Convert to speech
            </button>
          </h1>
        }
        breadCrumbs={{ label: "Back", onAction: () => navigate(-1) }}
      >
        <Card>
          <Container>
            <textarea value={transcript} onChange={onChangeHandler} />
            <div className="actions">
              <div>
                <button onClick={exportTranscript}>Export</button>
              </div>
              <div>
                <button
                  disabled={transcript === data?.text || updateLoading}
                  onClick={() =>
                    updateTranscript({
                      id: id as string,
                      data: {
                        name: data?.name as string,
                        text: transcript as string,
                        type: data?.type as "live" | "upload",
                      },
                    })
                  }
                >
                  {updateLoading ? <Loader size="18" color="#eee" /> : "Save"}
                </button>
                <button
                  onClick={() =>
                    deleteTranscript(id as string, {
                      onSuccess: () => navigate(-1),
                    })
                  }
                  disabled={deleteLoading}
                >
                  {deleteLoading ? <Loader size="18" color="#eee" /> : "Delete"}
                </button>
              </div>
            </div>
          </Container>
        </Card>
      </Page>
    </LoaderContainer>
  );
}

const Container = styled.div`
  padding: 20px;

  textarea {
    min-width: 100%;
    max-width: 100%;
    max-height: 250px;
    min-height: 100px;
    font-size: 14px;
    border: 1px solid rgba(91, 97, 110, 0.324);
    border-radius: 5px;
    padding: 10px;

    &:focus {
      border: 1px solid #000;
      outline: none;
    }
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin-top: 10px;

    button {
      padding: 5px 10px;
      border-radius: 5px;
      color: #fff;
      font-size: 14px;

      &:nth-child(1) {
        background: #12a633;
        border: 1px solid #12a633;
      }

      &:nth-child(2) {
        background: #e94a3f;
        border: 1px solid #e94a3f;
      }

      &:disabled {
        opacity: 0.4;
      }
    }

    div {
      display: flex;
      gap: 10px;
    }
  }
`;
