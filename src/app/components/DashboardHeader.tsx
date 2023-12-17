import tw, { styled } from "twin.macro";
import { Link } from "react-router-dom";

import media from "../../app/styles/media";
import Logo from "../assets/images/lasu_logo.png";

import { DASHBOARD_HEADER_HEIGHT } from "../../app/constants/variables";
import { useProfile } from "../providers/ProfileProvider";

export default function DashboardHeader() {
  const profile = useProfile();

  return (
    <Container>
      <Link to="/dashboard">
        <img src={Logo} alt="lasu" />
        <p>LECTURE TRANSCRIPTION TOOL</p>
      </Link>

      <div className="secondary">
        <div className="img-placeholder">
          <p tw="text-[#5551ff] text-[1.2rem]">
            {profile?.username[0].toUpperCase()}{" "}
            {profile?.username[1].toUpperCase()}
          </p>
        </div>
        <p tw="text-[1.2rem]">Hi,{profile?.username}</p>
      </div>
    </Container>
  );
}

const Container = styled.nav`
  min-height: ${DASHBOARD_HEADER_HEIGHT}px;
  ${tw`w-full h-full px-[32px] flex items-center justify-between border-b mobile:px-[16px]`};

  ${tw`bg-white `};

  a {
    display: flex;
    align-items: center;
    gap: 10px;
    img {
      width: 71px;
      height: 58px;
    }

    p {
      font-size: 18px;
      font-weight: 500;
      ${tw`mobile:hidden`}
    }
  }

  .logo {
    height: 28px;
    width: 108.65388488769531px;

    ${media.mobile} {
      height: 24px;
      width: 93.13190460205078px;
    }
  }

  .secondary {
    ${tw`flex items-center gap-[10px]`};

    > .img-placeholder {
      width: 40px;
      height: 40px;
      border-radius: 32px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #5451ff2e;
    }
  }
`;
