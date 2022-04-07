import React from "react";

import { Container } from "./styles";

interface Props {
  name: string;
  tweetsCount: number;
}

const ProfileInfo: React.FC<Props> = ({ name, tweetsCount }) => {
  return (
    <Container>
      <strong>{name}</strong>
      <span>{`${tweetsCount} Tweets`}</span>
    </Container>
  );
};

export default ProfileInfo;
