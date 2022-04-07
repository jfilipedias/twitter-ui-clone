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

        <ProfileInfo username="Filipe Dias" tweetsCount={654} />
      </Header>

      {/* <ProfilePage /> */}

      <BottomMenu />
    </Container>
  );
};

export default Feed;
