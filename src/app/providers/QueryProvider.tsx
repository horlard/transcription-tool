import * as React from "react";
import Axios from "axios";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import {
  UNAUTHORIZED_ERROR_CODE,
  UNFOUND_ROUTE,
} from "../../app/constants/variables";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry(failureCount, error) {
        if (!Axios.isAxiosError(error)) {
          return true;
        }

        const canRetry = Boolean(
          error.response &&
            error.response.status !== UNAUTHORIZED_ERROR_CODE &&
            error.response.status !== UNFOUND_ROUTE
        );
        return canRetry;
      },
    },
  },
});

export default function QueryProvider(props: React.PropsWithChildren<{}>) {
  return (
    <QueryClientProvider client={queryClient}>
      {props.children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
