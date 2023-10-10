import {
  HistoryRouterProps,
  unstable_HistoryRouter as HistoryRouter,
} from "react-router-dom";

import history from "./lib/history";
import ProfileProvider from "./providers/ProfileProvider";
import QueryProvider from "./providers/QueryProvider";
import ToastProvider from "./providers/ToastProvider";

import Routes from "./routes";

function App() {
  return (
    <QueryProvider>
      <ToastProvider>
        <ProfileProvider>
          <HistoryRouter
            history={history as unknown as HistoryRouterProps["history"]}
          >
            <Routes />
          </HistoryRouter>
        </ProfileProvider>
      </ToastProvider>
    </QueryProvider>
  );
}

export default App;
