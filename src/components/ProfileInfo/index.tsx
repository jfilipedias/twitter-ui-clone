import React from "react";

import { Container } from "./styles";

interface Props {
  username: string;
  tweetsCount: number;
}

const ProfileInfo: React.FC<Props> = ({ username, tweetsCount }) => {
  return (
    <Container>
      <strong>{username}</strong>
      <span>{`${tweetsCount} Tweets`}</span>
    </Container>
  );
};

export default ProfileInfo;
