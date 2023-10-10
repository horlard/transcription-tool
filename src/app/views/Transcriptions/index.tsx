import tw, { styled } from "twin.macro";
import { useNavigate } from "react-router-dom";

import Card from "../../components/Card";
import LoaderContainer from "../../components/LoaderContainer";
import Page from "../../components/Page";
import useGetTranscripts from "./hooks/useGetTranscripts";

import { ReactComponent as CaretRightIcon } from "../../assets/icons/caret-right.svg";
import { ReactComponent as Document } from "../../assets/icons/document.svg";
import EmptyState from "./components/EmptyState";

export default function Transcriptions() {
  const { isLoading, error, getTranscripts, data } = useGetTranscripts();

  const navigate = useNavigate();

  return (
    <LoaderContainer
      loading={isLoading}
      error={!!error}
      errorMessage={error?.response?.data.message}
      onRetry={getTranscripts}
    >
      <Page
        title="Saved Transcripts"
        breadCrumbs={{ label: "Back", onAction: () => navigate(-1) }}
      >
        <Card>
          {data?.length !== 0 ? (
            data?.map(({ _id, name, type }) => (
              <Container
                key={_id}
                role="button"
                onClick={() => navigate(`/transcripts/${_id}`)}
              >
                <div className="transcript">
                  <p tw="text-[1.6rem] font-normal">{name}</p>
                  <p tw="text-[1.2rem] text-black60">
                    {type === "live"
                      ? "Generated Real-time"
                      : "Generated via upload"}
                  </p>
                </div>
                <CaretRightIcon />
              </Container>
            ))
          ) : (
            <EmptyState title="No saved transcript" icon={<Document />} />
          )}
        </Card>
      </Page>
    </LoaderContainer>
  );
}

const Container = styled.div`
  display: flex;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }

  .transcript {
    display: flex;
    flex-direction: column;
    gap: 3px;
    padding: 5px 0;

    svg {
      width: 40px;
      height: 40px;
      border-radius: 32px;
    }
  }

  svg {
    ${tw` text-white opacity-[0.32]`}
  }
`;
