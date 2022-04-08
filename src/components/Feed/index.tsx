import React from "react";

import { Container, Tab, Tabs } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <Tab className="active">Tweets</Tab>
        <Tab>Tweets & Replies</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </Tabs>

      {/* <Tweets>
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
        <Tweet />
      </Tweets> */}
    </Container>
  );
};

export default Feed;
