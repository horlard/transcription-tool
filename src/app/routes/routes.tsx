import { Outlet, RouteObject } from "react-router-dom";
import DashboardHeader from "../components/DashboardHeader";

import DashBoardLayout from "../components/DashBoardLayout";
import DashboardMobileNav from "../components/DashboardMobileNav";
import DashboardSideNav from "../components/DashboardSideNav";
import AudioFileTranscription from "../views/AudioFileTranscription.tsx";
import ConvertToSpeech from "../views/ConvertToSpeech";
import LiveTranscription from "../views/LiveTranscription";
import Login from "../views/Login";
import SignUp from "../views/SignUp";
import TransactionDetails from "../views/TranscriptDetails.tsx";
import Transcriptions from "../views/Transcriptions";

const routesObject: RouteObject[] = [
  { path: "/", element: <SignUp /> },
  { path: "/login", element: <Login /> },

  {
    element: (
      <DashBoardLayout
        header={<DashboardHeader />}
        sidenav={<DashboardSideNav />}
        mobilenav={<DashboardMobileNav />}
      />
    ),
    children: [
      {
        path: "/dashboard",
        element: <LiveTranscription />,
      },
      {
        path: "/upload",
        element: <AudioFileTranscription />,
      },
      {
        path: "/transcripts",
        element: <Outlet />,
        children: [
          { index: true, element: <Transcriptions /> },
          { path: ":id", element: <TransactionDetails /> },
        ],
      },
      {
        path: "/convert-to-speech/:id",
        element: <ConvertToSpeech />,
      },
    ],
  },
];

export default routesObject;
