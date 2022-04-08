import styled from "styled-components";

import { Chat, Heart, Pin, Repeat } from "../../styles/Icons";

export const Actions = styled.div``;

export const Avatar = styled.div``;

export const Body = styled.div``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding: 14px 16px;
  max-width: 100%;

  background-color: transparent;
  border-bottom: 1px solid var(--outline);

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--tweet-hover);
  }
`;

export const Content = styled.div``;

export const CommentIcon = styled(Chat)``;

export const Description = styled.div``;

export const Dot = styled.div``;

export const Flag = styled.div`
  display: flex;
  align-items: center;

  font-size: 13px;
  color: var(--gray);

  > svg {
    width: 13px;
    height: 13px;

    fill: var(--gray);
    stroke: var(--gray);
    stroke-width: 1px;

    margin-right: 10px;
  }
`;

export const Header = styled.div``;

export const HeartIcon = styled(Heart)``;

export const MediaContent = styled.div``;

export const PinIcon = styled(Pin)``;

export const Status = styled.div`
  > svg {
    width: 16px;
    height: 16px;

    fill: var(--gray);
  }
`;

export const RetweetIcon = styled(Repeat)``;
