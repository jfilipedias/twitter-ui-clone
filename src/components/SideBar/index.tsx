import React from "react";

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from "./styles";

const SideBar: React.FC = () => {
  return (
    <Container>
      <SearchWrapper>
        <SearchInput placeholder="Search on twitter." />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <p>{"Lorem ipsum dolor sit amend.".repeat(90)}</p>
      </Body>
    </Container>
  );
};

export default SideBar;
