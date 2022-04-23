import React from "react";

import { Container } from "./styles";

interface Props {
  subject: string;
  content: string;
}

const News: React.FC<Props> = ({ subject, content }) => {
  return (
    <Container>
      <span>{subject}</span>
      <strong>{content}</strong>
    </Container>
  );
};

export default News;
