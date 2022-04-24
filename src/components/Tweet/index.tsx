import React from "react";

import {
  Action,
  Actions,
  Avatar,
  Body,
  Container,
  Content,
  CommentIcon,
  Description,
  Dot,
  Flag,
  Header,
  HeartIcon,
  MediaContent,
  PinIcon,
  RetweetIcon,
} from "./styles";

interface Props {
  retweeted?: boolean;
  pinned?: boolean;
}

const Tweet: React.FC<Props> = ({ retweeted, pinned }) => {
  return (
    <Container>
      {retweeted && (
        <Flag>
          <RetweetIcon />
          <a href="/">You Retweeted</a>
        </Flag>
      )}

      {pinned && (
        <Flag>
          <PinIcon />
          <a href="/">Pinned Tweet</a>
        </Flag>
      )}

      <Body>
        <Avatar />

        <Content>
          <Header>
            <strong>Filipe Dias</strong>
            <span>@jfiliped</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Lorem ipsum dolor sit amend.</Description>

          <MediaContent />

          <Actions>
            <Action color="twitter">
              <CommentIcon />
              18
            </Action>
            <Action color="retweet">
              <RetweetIcon />
              18
            </Action>
            <Action color="like">
              <HeartIcon />
              18
            </Action>
          </Actions>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
