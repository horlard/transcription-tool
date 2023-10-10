import { NavLink, useLocation } from "react-router-dom";
import tw, { css, styled } from "twin.macro";

import appLinks from "../../app/constants/appLinks";

export default function DashboardSideNav() {
  // const profile = useProfile();

  const location = useLocation();

  // if (!profile) return null;

  return (
    <Container>
      <NavigationSection>
        {appLinks.map(({ label, url, icon: Icon }) => {
          return (
            <li key={label}>
              <Link to={url}>
                <Icon /> {label}
              </Link>
            </li>
          );
        })}
      </NavigationSection>
    </Container>
  );
}

const Container = styled.nav`
  ${tw`w-full h-page py-[24px] px-[32px] flex flex-col border-r`};

  ${tw`bg-white `};
`;

const NavigationSection = styled.ul`
  ${tw`flex-grow`};

  &,
  li {
    ${tw`w-full`};
  }
`;

const LinkStyles = css`
  ${tw`w-full h-[46px] rounded-[8px] px-[16px] flex items-center text-[1.4rem] text-black font-semibold mb-[8px] last-of-type:mb-0`};

  svg {
    ${tw`w-[20px] h-[20px] mr-[10px]`};
  }
`;

const Link = styled(NavLink)`
  ${LinkStyles};

  &.active {
    ${tw`bg-[#eee] text-black`};

    svg {
      path {
        fill: black;
        fill-opacity: 1;
      }
    }
  }
`;
