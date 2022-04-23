import React from "react";

import SideList from "../SideList";
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
        <SideList title="What's happening">
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
        </SideList>

        <SideList title="What's happening">
          <h1>Test</h1>
          <h1>Test</h1>
          <h1>Test</h1>
        </SideList>
      </Body>
    </Container>
  );
};

export default SideBar;
