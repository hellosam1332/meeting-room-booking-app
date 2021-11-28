import React from "react";
import styled from "@emotion/styled";

type ContainerProps = {
  backgroundColor?: string;
};

const Container = styled.div<ContainerProps>`
  border-radius: 10px;
  background-color: ${(props) => props.backgroundColor || "#5f0080"};
  color: #333333;
`;

interface Props {
  content: string;
  backgroundColor?: string;
}

function Chip({ content, backgroundColor }: Props) {
  return <Container backgroundColor={backgroundColor}>{content}</Container>;
}

export default Chip;
