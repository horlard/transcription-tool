import * as React from "react";
import { styled } from "twin.macro";

interface Props {
  className?: string;
}

function Card(props: React.PropsWithChildren<Props>) {
  const { className } = props;

  return <CardContainer className={className}>{props.children}</CardContainer>;
}

const CardContainer = styled.div`
  background-color: #fff;
  border: 1px solid rgba(91, 97, 110, 0.2);
  border-radius: 8px;
`;

export default Card;
