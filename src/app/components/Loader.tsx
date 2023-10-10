import tw, { styled, css } from "twin.macro";

interface LoaderBoxProps {
  color?: string;
  size?: string;
}
interface Props extends LoaderBoxProps {
  className?: string;
}
export default function Loader(props: Props) {
  return <LoaderBox aria-label="loading" role="status" {...props} />;
}

const LoaderBox = styled.div<LoaderBoxProps>`
  ${tw`w-[40px] h-[40px] border-2 border-[#12A633] rounded-full animate-spin-fast`};

  ${(props) =>
    props.color &&
    css`
      border-color: ${props.color};
    `};

  ${(props) =>
    props.size &&
    css`
      width: ${props.size}px;
      height: ${props.size}px;
    `};

  ${tw`border-l-transparent border-b-transparent`};
`;
