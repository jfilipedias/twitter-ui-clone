import styled, { css } from "styled-components";

import {
  Home,
  Hashtag,
  Bell,
  Mail,
  Bookmark,
  User,
  Dots,
} from "../../styles/Icons";
import Logo from "../Logo";

const iconsCSS = css`
  flex-shrink: 0;

  width: 30px;
  height: 30px;
`;

export const Container = styled.div`
  display: none;

  @media (min-width: 500px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    position: sticky;
    top: 0;
    left: 0;

    padding: 9px 19px 20px;

    max-height: 100vh;
    overflow-y: auto;
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

  margin-bottom: 20px;
`;

export const MenuButton = styled.div`
  display: flex;
  align-items: center;
  flex-shrink: 0;

  > span {
    display: none;
  }

  @media (min-width: 1280px) {
    > span {
      display: inline;
      margin-left: 19px;

      font-size: 19px;
    }
  }

  padding: 12px 0;
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

export const Button = styled.div``;
