import { ReactNode } from "react";
import tw, { styled } from "twin.macro";

type Props = {
  title?: string;
  className?: string;
  icon?: ReactNode;
};

function EmptyState(props: Props) {
  const { title, icon } = props;

  return (
    <Container className={props.className}>
      {icon && icon}

      {title && <h4 tw="text-[2rem] font-semibold">{props.title}</h4>}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 50px 0px;

  > svg {
    width: 65px;
    height: 73px;
    margin-bottom: 20px;

    path {
      ${tw`fill-current`};
    }
  }

  > h4 {
    margin-bottom: 10px;
  }
`;
export default EmptyState;
