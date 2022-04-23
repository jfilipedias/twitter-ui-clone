import React from "react";

import { Container, Item, Title } from "./styles";

interface Props {
  title: string;
  children: React.ReactNode[];
}

const SideList: React.FC<Props> = ({ title, children }) => {
  return (
    <Container>
      <Item>
        <Title>{title}</Title>
      </Item>

      {children.map((child, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <Item key={index}>{child}</Item>
      ))}
    </Container>
  );
};

export default SideList;
