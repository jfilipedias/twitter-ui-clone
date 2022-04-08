import React from "react";

import BottomMenu from "../BottomMenu";
import Feed from "../Feed";
import HeaderInfo from "../HeaderInfo";
import Profile from "../Profile";
import { BackIcon, Container, Header } from "./styles";

const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button type="button">
          <BackIcon />
        </button>

        <HeaderInfo name="Filipe Dias" tweetsCount={654} />
      </Header>

      <Profile />

      <Feed />

      <BottomMenu />
    </Container>
  );
};

export default Main;
