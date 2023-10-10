import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import tw, { styled } from "twin.macro";

import {
  DASHBOARD_BODY_PADDING_MOBILE_X,
  DASHBOARD_BODY_PADDING_MOBILE_Y,
  DASHBOARD_BODY_PADDING_X,
  DASHBOARD_BODY_PADDING_Y,
  DASHBOARD_HEADER_HEIGHT,
  DASHBOARD_MOBILE_NAV_HEIGHT,
  DASHBOARD_SIDEBAR_WIDTH,
} from "../../app/constants/variables";
import useGetUser from "../hooks/useGetUser";
import { useSetProfile } from "../providers/ProfileProvider";
import media from "../styles/media";
import LoaderContainer from "./LoaderContainer";

interface Props {
  header: ReactNode;
  sidenav: ReactNode;
  mobilenav: ReactNode;
}

export default function DashBoardLayout(props: Props) {
  const { header, sidenav, mobilenav } = props;

  const { isLoading, user, getUser, error } = useGetUser();

  const setProfile = useSetProfile();

  if (user) {
    setProfile(user);
  }

  return (
    <LoaderContainer
      screen
      loading={isLoading}
      error={!!error}
      onRetry={getUser}
      errorMessage={error?.response?.data?.message}
    >
      <Container>
        <div className="header">{header}</div>
        <section className="body">
          <aside className="sidebar">{sidenav}</aside>
          <main className="content">
            <Outlet />
          </main>
        </section>

        <footer>{mobilenav}</footer>
      </Container>
    </LoaderContainer>
  );
}

const Container = styled.section`
  ${tw`w-full h-screen flex flex-col`};

  > .header {
    height: ${DASHBOARD_HEADER_HEIGHT}px;
    position: sticky;
    top: 0;
    ${tw`z-10`};
  }

  > .body {
    ${tw`flex-grow w-full flex`};
    height: calc(100vh - ${DASHBOARD_HEADER_HEIGHT}px);

    ${media.mobile} {
      height: calc(
        100vh - ${DASHBOARD_HEADER_HEIGHT}px - ${DASHBOARD_MOBILE_NAV_HEIGHT}px
      );
    }
  }

  > .body > .sidebar {
    width: ${DASHBOARD_SIDEBAR_WIDTH}px;
    height: 100%;
    position: sticky;
    top: ${DASHBOARD_HEADER_HEIGHT}px;
    flex-shrink: 0;

    ${tw`mobile:hidden`};
  }

  > .body > .content {
    ${tw`w-full h-full overflow-x-hidden overflow-y-auto max-w-[1178px] mx-auto`};

    padding-left: ${DASHBOARD_BODY_PADDING_X}px;
    padding-right: ${DASHBOARD_BODY_PADDING_X}px;

    padding-top: ${DASHBOARD_BODY_PADDING_Y}px;
    /* padding-bottom: ${DASHBOARD_BODY_PADDING_Y}px; */

    ${media.mobile} {
      padding-left: ${DASHBOARD_BODY_PADDING_MOBILE_X}px;
      padding-right: ${DASHBOARD_BODY_PADDING_MOBILE_X}px;

      padding-top: ${DASHBOARD_BODY_PADDING_MOBILE_Y}px;
      padding-bottom: ${DASHBOARD_BODY_PADDING_MOBILE_Y}px;
    }

    /* &::-webkit-scrollbar {
      display: none;
    } */
  }

  > footer {
    flex-shrink: 0;
    height: ${DASHBOARD_MOBILE_NAV_HEIGHT}px;
    position: sticky;
    bottom: env(safe-area-inset-bottom, 0);

    ${tw`w-full hidden mobile:block`};
  }
`;
