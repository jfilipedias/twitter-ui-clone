import React from "react";

import {
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
  Status,
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
            <span>@filipe_dias</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description>Lorem ipsum dolor sit amend.</Description>

          <MediaContent />

          <Actions>
            <Status>
              <CommentIcon />
              18
            </Status>
            <Status>
              <RetweetIcon />
              18
            </Status>
            <Status>
              <HeartIcon />
              18
            </Status>
          </Actions>
        </Content>
      </Body>
    </Container>
  );
};

export default Tweet;
