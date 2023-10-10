import SpeechRecognition from "react-speech-recognition";

import CreateTranscript from "./components/CreateTranscript";
import TranscriptName from "./components/TranscriptName";
import GenerateTranscriptStep from "./components/GenerateTranscriptStep";
import Page from "../../components/Page";
import { useState } from "react";

type activeStepType = "create" | "name" | "generate";

export default function LiveTranscription() {
  const [activeStep, setActiveStep] = useState<activeStepType | string>(
    "create"
  );

  const [transcriptName, setTranscriptName] = useState("");

  const onContinue = (p: activeStepType) => setActiveStep(p);

  const goBack = () => {
    const cursor = ["create", "name", "generate"];
    const activeIndex = cursor.indexOf(activeStep);
    setActiveStep(cursor[activeIndex - 1]);
    SpeechRecognition.stopListening();
  };

  const showBackButton = Boolean(
    activeStep === "name" || activeStep === "generate"
  );

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
          clearName={() => {
            setTranscriptName("");
          }}
        />
      )}
      {activeStep === "name" && (
        <TranscriptName
          onContinue={(n: string) => {
            onContinue("generate");
            setTranscriptName(n);
          }}
          transcriptName={transcriptName}
        />
      )}
      {activeStep === "generate" && (
        <GenerateTranscriptStep transcriptName={transcriptName} />
      )}
    </Page>
  );
}
