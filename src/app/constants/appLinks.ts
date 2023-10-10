// import { ReactComponent as Explore } from "app/assets/icons/explore-outline.svg";
// import { ReactComponent as Portfolio } from "app/assets/icons/wallet-outline.svg";
// import { ReactComponent as Spend } from "app/assets/icons/spend-outline.svg";
// import { ReactComponent as Profile } from "app/assets/icons/profile-outline.svg";
// import { ReactComponent as ConnectIcon } from "app/assets/icons/peer_chain.svg";
import { ReactComponent as RealTime } from "../../app/assets/icons/real-time.svg";
import { ReactComponent as Transcripts } from "../../app/assets/icons/transcripts.svg";
import { ReactComponent as Upload } from "../../app/assets/icons/upload.svg";

const appLinks = [
  {
    label: "Live Transcription",
    url: "/dashboard",
    icon: RealTime,
  },
  {
    label: "Upload Audio File",
    url: "/upload",
    icon: Upload,
  },
  {
    label: "View Transcripts",
    url: "/transcripts",
    icon: Transcripts,
  },
];

export default appLinks;
