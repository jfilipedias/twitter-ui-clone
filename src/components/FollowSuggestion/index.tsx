import React from "react";

import { Container, ProfileInfo, Avatar, Info, FollowButton } from "./styles";

interface Props {
  name: string;
  nickname: string;
}

const FollowSuggestion: React.FC<Props> = ({ name, nickname }) => {
  return (
    <Container>
      <ProfileInfo>
        <Avatar />

        <Info>
          <strong>{name}</strong>
          <span>{nickname}</span>
        </Info>
      </ProfileInfo>

      <FollowButton>Follow</FollowButton>
    </Container>
  );
};

export default FollowSuggestion;
