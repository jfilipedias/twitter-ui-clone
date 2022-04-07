import React from "react";

import BottomMenu from "../BottomMenu";
import HeaderInfo from "../HeaderInfo";
import Profile from "../Profile";
import { BackIcon, Container, Header } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <HeaderInfo name="Filipe Dias" tweetsCount={654} />
      </Header>

      <Profile />

      <BottomMenu />
    </Container>
  );
};

export default Feed;
