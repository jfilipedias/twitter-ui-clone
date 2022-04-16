import React from "react";

import { BellIcon, Container, EmailIcon, HomeIcon, SearchIcon } from "./styles";

const BottomMenu: React.FC = () => {
  return (
    <Container>
      <HomeIcon />
      <SearchIcon />
      <BellIcon />
      <EmailIcon />
    </Container>
  );
};

export default BottomMenu;
