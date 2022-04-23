import React from "react";

import FollowSuggestion from "../FollowSuggestion";
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
        <SearchInput placeholder="Search Twitter" />
        <SearchIcon />
      </SearchWrapper>

      <Body>
        <SideList title="You might like">
          <FollowSuggestion name="Twitter" nickname="@Twitter" />
          <FollowSuggestion name="Filipe Dias" nickname="@jfiliped" />
          <FollowSuggestion name="Github" nickname="@github" />
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
