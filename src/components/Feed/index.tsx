import React from "react";

import Tweet from "../Tweet";
import { Container, Tab, Tabs, Tweets } from "./styles";

const Feed: React.FC = () => {
  return (
    <Container>
      <Tabs>
        <Tab className="active">Tweets</Tab>
        <Tab>Tweets & Replies</Tab>
        <Tab>Media</Tab>
        <Tab>Likes</Tab>
      </Tabs>

      <Tweets>
        <Tweet pinned />
        <Tweet retweeted />
        <Tweet />
        <Tweet retweeted />
        <Tweet />
      </Tweets>
    </Container>
  );
};

export default Feed;
