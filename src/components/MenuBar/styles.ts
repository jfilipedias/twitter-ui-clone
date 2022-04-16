import styled, { css } from "styled-components";

import {
  Home,
  Hashtag,
  Bell,
  Mail,
  Bookmark,
  User,
  Dots,
  DotsHorizontal,
} from "../../styles/Icons";
import { Button } from "../Button";
import Logo from "../Logo";

const iconsCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
`;

export const Container = styled.div`
  display: none;

  padding: 9px 20px 24px;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    max-height: 100vh;
    overflow-y: auto;
  }

  @media (min-width: 1280px) {
    width: 275px;
  }
`;

export const TopSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1280px) {
    align-items: flex-start;
  }
`;

export const StyledLogo = styled(Logo)`
  width: 41px;
  height: 41px;
  padding: 4px;

  border-radius: 50%;

  margin-bottom: 20px;

  @media (min-width: 1280px) {
    margin-left: 8px;
    margin-bottom: 20px;

    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--dark-hover);
    }

    &:focus {
      outline: 2px solid var(--white);
    }
  }
`;

export const MenuButton = styled.button`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  border-radius: 50px;

  margin: 4px 0;
  padding: 10px;

  > span {
    display: none;
  }

  &.active {
    font-weight: bold;

    > svg {
      fill: var(--white);
    }
  }

  @media (min-width: 1280px) {
    padding: 10px 14px 10px 16px;
    transition: background-color 0.2s ease;

    &:hover {
      background-color: var(--dark-hover);
    }

    &:focus {
      outline: 2px solid var(--white);
    }

    > span {
      display: inline;
      margin-left: 19px;

      font-size: 19px;
    }
  }
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS}
`;

export const SharpIcon = styled(Hashtag)`
  ${iconsCSS}
`;

export const BellIcon = styled(Bell)`
  ${iconsCSS}
`;

export const MailIcon = styled(Mail)`
  ${iconsCSS}
`;

export const BookmarkIcon = styled(Bookmark)`
  ${iconsCSS}
`;

export const ProfileIcon = styled(User)`
  ${iconsCSS}
`;

export const DotsIcon = styled(Dots)`
  ${iconsCSS}
`;

export const StyledButton = styled(Button)`
  margin-top: 33px;

  width: 40px;
  height: 40px;

  background: var(--twitter);
  color: var(--white);

  &:hover {
    background: var(--twitter-hover);
  }

  &:focus {
    outline: 2px solid var(--twitter-outline);
  }

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    width: 100%;
    height: unset;

    > span {
      display: inline;
    }
  }
`;

export const BottomSide = styled.button`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-shrink: 0;

  border-radius: 50px;

  margin-top: 20px;
  padding: 10px;

  @media (min-width: 1280px) {
    justify-content: flex-start;
    width: 100%;

    transition: background-color 0.2s ease, outline 0.2s ease;

    &:hover,
    &:focus {
      background-color: var(--dark-hover);
    }

    &:focus {
      outline: 2px solid var(--white);
    }
  }
`;

export const Avatar = styled.div`
  width: 39px;
  height: 39px;

  flex-shrink: 0;

  border-radius: 50%;

  background: var(--gray);
`;

export const ProfileData = styled.div`
  display: none;

  @media (min-width: 1280px) {
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    font-size: 14px;

    > span {
      color: var(--gray);
    }
  }
`;

export const OptionsIcon = styled(DotsHorizontal)`
  display: none;

  @media (min-width: 1280px) {
    display: inline;

    width: 25px;
    height: 25px;
    margin-left: 60px;

    color: var(--white);
  }
`;
