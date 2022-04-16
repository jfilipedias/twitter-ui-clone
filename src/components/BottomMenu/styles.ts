import styled, { css } from "styled-components";

import { Mail, Home, Bell, Search } from "../../styles/Icons";

const iconsCSS = css`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  outline: 0;

  cursor: pointer;

  stroke: var(--white);
`;

export const BellIcon = styled(Bell)`
  ${iconsCSS}
`;

export const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;

  background-color: var(--primary);
  width: 100%;
  border-top: 1px solid var(--outline);

  display: flex;
  justify-content: space-between;
  padding: 8px min(46px, max(10vw, 10px));

  @media (min-width: 500px) {
    display: none;
  }
`;

export const EmailIcon = styled(Mail)`
  ${iconsCSS}
`;

export const HomeIcon = styled(Home)`
  ${iconsCSS}
`;

export const SearchIcon = styled(Search)`
  ${iconsCSS}
`;
