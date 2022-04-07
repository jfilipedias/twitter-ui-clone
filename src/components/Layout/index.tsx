import React from "react";

import Feed from "../Feed";
import { Container, Wrapper } from "./styles";

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Feed />
      </Wrapper>
    </Container>
  );
};

export default Layout;
