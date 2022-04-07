import React from "react";

import BottomMenu from "../BottomMenu";
import ProfileInfo from "../ProfileInfo";
import { BackIcon, Container, Header } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

      </Header>

    </Container>
  );
};

export default Feed;
