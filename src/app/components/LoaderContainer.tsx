import * as React from "react";
import media from "../../app/styles/media";
import tw, { styled } from "twin.macro";
import clsx from "clsx";

import Loader from "../components/Loader";

import {
  DASHBOARD_BODY_PADDING_Y,
  DASHBOARD_HEADER_HEIGHT,
  DASHBOARD_MOBILE_NAV_HEIGHT,
} from "../../app/constants/variables";
import { useNavigate } from "react-router-dom";

interface Props {
  error?: boolean;
  errorMessage?: string;
  onRetry?: () => void;
  retryText?: string;
  className?: string;
  screen?: boolean;
  page?: boolean;
  loading?: boolean;
}
export default function LoaderContainer(props: React.PropsWithChildren<Props>) {
  const {
    children,
    error,
    loading,
    page,
    screen,
    errorMessage = "Sorry, something went wrong.",
    onRetry,
    retryText,
    className,
    ...rest
  } = props;

  const navigate = useNavigate();

  return (
    <Container className={clsx({ page, screen }, className)} {...rest}>
      {loading && (
        <div tw="p-[30px]">
          <Loader />
        </div>
      )}

      {error && (
        <div tw="text-[2.4rem] text-center">
          {errorMessage} <br />{" "}
          <button
            tw="text-[1.4rem] text-[#12a633]"
            onClick={() => navigate("/login")}
          >
            Return to Login
          </button>
        </div>
      )}

      {!loading && !error && (
        <div tw="w-full h-full flex-grow self-start">{children}</div>
      )}
    </Container>
  );
}

const Container = styled.div`
  ${tw`w-full flex items-center justify-center`};

  &.screen {
    ${tw`h-screen mobile:px-0`};
  }

  &.page {
    min-height: calc(
      100vh - ${DASHBOARD_HEADER_HEIGHT}px - ${DASHBOARD_BODY_PADDING_Y}px -
        ${DASHBOARD_BODY_PADDING_Y}px
    );
    ${tw`xl:h-full`};

    max-height: 100%;

    ${tw`mobile:px-0`};

    ${media.mobile} {
      min-height: calc(
        100vh - ${DASHBOARD_HEADER_HEIGHT}px - ${DASHBOARD_MOBILE_NAV_HEIGHT}px
      );
    }
  }
`;
