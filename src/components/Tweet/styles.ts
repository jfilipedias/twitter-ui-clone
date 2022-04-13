import styled from "styled-components";

import { Chat, Heart, Pin, Repeat } from "../../styles/Icons";

interface Props {
  color: string;
}

export const Action = styled.div<Props>`
  display: flex;
  align-items: center;

  color: var(--gray);

  transition: color 0.2s ease;

  > svg {
    width: 16px;
    height: 16px;
    margin-right: 5px;

    fill: var(--gray);

    transition: fill 0.2s ease;
  }

  &:hover {
    color: ${(props: Props) => `var(--${props.color})`};

    > svg {
      fill: ${(props: Props) => `var(--${props.color})`};
    }
  }
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  flex-wrap: wrap;
  margin-top: 12px;
  width: 100%;

  @media (min-width: 330px) {
    width: 65%;
  }
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  flex-shrink: 0;
  background: var(--gray);

  position: absolute;
  top: 0;
  left: 0;
`;

export const Body = styled.div`
  display: flex;
  margin-top: 3px;

  position: relative;
`;

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

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin-top: 2px;
  padding-left: 58px;
`;

export const CommentIcon = styled(Chat)``;

export const Description = styled.p`
  font-size: 15px;
  margin-top: 4px;
`;

export const Dot = styled.div`
  background: var(--gray);
  width: 2px;
  height: 2px;
  margin: 0 10px;
`;

export const Flag = styled.div`
  display: flex;
  align-items: center;

  > a {
    text-decoration: none;
    font-size: 13px;
    color: var(--gray);

    &:hover {
      text-decoration: underline;
    }
  }

  > svg {
    width: 14px;
    height: 14px;

    margin-left: 36px;
    margin-right: 10px;

    fill: var(--gray);
    stroke: var(--gray);

    margin-right: 10px;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;

  font-size: 15px;
  white-space: nowrap;

  > strong {
    margin-right: 5px;
  }

  > span,
  time {
    color: var(--gray);
  }

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > strong,
  time {
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const HeartIcon = styled(Heart)``;

export const MediaContent = styled.div`
  margin-top: 12px;
  width: 100%;
  height: min(285px, max(175px, 41vw));

  background: var(--outline);
  border-radius: 14px;

  cursor: pointer;
`;

export const PinIcon = styled(Pin)``;

export const RetweetIcon = styled(Repeat)``;
