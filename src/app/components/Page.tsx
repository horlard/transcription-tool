import tw, { styled } from "twin.macro";
import clsx from "clsx";
import { PropsWithChildren, ReactNode } from "react";
import { Link } from "react-router-dom";

import media from "../../app/styles/media";
import { ReactComponent as ChevronLeft } from "../../app/assets/icons/chevron-left.svg";
import { DASHBOARD_BODY_PADDING_Y } from "../../app/constants/variables";

type PagebradCrumb = {
  label: string;
  onAction?: () => void;
  url?: string;
};

export interface PageProps extends ContainerProps {
  title?: ReactNode;
  subTitle?: ReactNode;
  breadCrumbs?: PagebradCrumb;
}
export default function Page(props: PropsWithChildren<PageProps>) {
  const { children, fullWidth, title, subTitle, breadCrumbs } = props;

  const showHeader = Boolean(title || subTitle || breadCrumbs);

  const backContent = (
    <>
      <ChevronLeft /> {breadCrumbs?.label}
    </>
  );

  return (
    <Container fullWidth={fullWidth}>
      {showHeader && (
        <div className="header">
          {!!breadCrumbs && (
            <div
              className={clsx("breadcrumbs", {
                "has-spacing": title || subTitle,
              })}
            >
              {breadCrumbs.url ? (
                <Link to={breadCrumbs.url}>{backContent}</Link>
              ) : (
                <button onClick={breadCrumbs.onAction}>{backContent}</button>
              )}
            </div>
          )}

          <h1 tw=" text-[2.8rem] font-semibold">{title}</h1>

          <h4 tw="text-[1.6rem] font-semibold">{subTitle}</h4>
        </div>
      )}

      <div className="body">{children}</div>
    </Container>
  );
}

interface ContainerProps {
  fullWidth?: boolean;
}

const Container = styled.section<ContainerProps>`
  width: ${(props) => (props.fullWidth ? "100%" : "600px")};

  ${tw`flex flex-col max-w-full h-full my-0 mx-auto`};

  > .header {
    ${tw`mb-[24px]`};

    .breadcrumbs {
      &.has-spacing {
        ${tw`mb-[24px]`};
      }

      a,
      button {
        ${tw`flex items-center text-[1.6rem] text-black60`};

        svg {
          ${tw`w-[20px] h-[20px] mr-[2px]`};
        }
      }
    }

    > h1 {
      ${tw`mb-[2px]`};
    }

    > h4 {
      ${tw`text-black60 font-normal`};
    }
  }

  > .body {
    ${tw`w-full flex-grow`};

    ${tw`xl:pb-[24px] pb-[72px]`};

    ${media.mobile} {
      padding-bottom: ${DASHBOARD_BODY_PADDING_Y}px;
    }
  }
`;
