import Page from "../../components/Page";
import { useState } from "react";
import TranscriptName from "./components/TranscriptName";
import CreateTranscript from "./components/CreateTranscript";
import UploadFile from "./components/UploadFile";
import GenerateTranscriptStep from "./components/GenerateTranscriptStep";

type activeStepType = "create" | "name" | "upload" | "generate";

export default function LiveTranscription() {
  const [activeStep, setActiveStep] = useState<activeStepType | string>(
    "create"
  );

  const [transcriptName, setTranscriptName] = useState("");

  const [transcript, setTranscript] = useState("");

  const onContinue = (p: activeStepType) => setActiveStep(p);

  const goBack = () => {
    const cursor = ["create", "name", "upload", "generate"];
    const activeIndex = cursor.indexOf(activeStep);
    setActiveStep(cursor[activeIndex - 1]);
  };

  const showBackButton = Boolean(
    activeStep === "name" ||
      activeStep === "generate" ||
      activeStep === "upload"
  );

  console.log([transcript]);
  return (
    <Page
      breadCrumbs={
        showBackButton
          ? {
              label: "Back",
              onAction: goBack,
            }
          : undefined
      }
    >
      {activeStep === "create" && (
        <CreateTranscript
          onContinue={() => {
            onContinue("name");
          }}
        />
      )}
      {activeStep === "name" && (
        <TranscriptName
          onContinue={(n: string) => {
            onContinue("upload");
            setTranscriptName(n);
          }}
          transcriptName={transcriptName}
        />
      )}
      {activeStep === "upload" && (
        <UploadFile
          onContinue={(t: string) => {
            onContinue("generate");
            setTranscript(t);
          }}
        />
      )}

      {activeStep === "generate" && (
        <GenerateTranscriptStep
          transcript={transcript}
          transcriptName={transcriptName}
        />
      )}
    </Page>
  );
}
