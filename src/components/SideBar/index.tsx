import React from "react";

import FollowSuggestion from "../FollowSuggestion";
import News from "../News";
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
          <News subject="Programming" content="The plan for React 18" />
          <News
            subject="Gaming"
            content="11 Things Every New Nintendo Switch Owner Should Try Or Consider"
          />
          <News subject="Programming" content="Highlights from Git 2.36" />
          <News
            subject="Gaming"
            content="Five Video Games To Vibe With While Stoned"
          />
        </SideList>

        <SideList title="What's happening">
          <News subject="Programming" content="The plan for React 18" />
          <News
            subject="Gaming"
            content="11 Things Every New Nintendo Switch Owner Should Try Or Consider"
          />
          <News subject="Programming" content="Highlights from Git 2.36" />
          <News
            subject="Gaming"
            content="Five Video Games To Vibe With While Stoned"
          />
        </SideList>
      </Body>
    </Container>
  );
};

export default SideBar;
