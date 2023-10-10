import { NavLink } from "react-router-dom";
import tw, { styled } from "twin.macro";

import appLinks from "../../app/constants/appLinks";

export default function DashboardMobilenav() {
  return (
    <Container>
      {appLinks.map(({ label, url, icon: Icon }) => {
        return (
          <Link key={label} to={url}>
            <Icon />
            {label}
          </Link>
        );
      })}
    </Container>
  );
}

const Container = styled.nav`
  ${tw`w-full h-full flex border-t p-[8px]`};

  ${tw`bg-white `};
`;

const Link = styled(NavLink)`
  ${tw`w-[89.75px] h-full flex-shrink-0 flex-grow flex flex-col items-center justify-center text-[1.2rem] text-black p-[10px]`};

  svg {
    ${tw`w-[24px] h-[24px] mb-[4px]`};
  }

  &.active {
    ${tw`bg-[#eee] text-black rounded-[5px]`};

    svg {
      path {
        fill: black;
        fill-opacity: 1;
      }
    }
  }
`;
