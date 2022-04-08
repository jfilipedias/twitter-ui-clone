import styled, { css } from "styled-components";

import { Calendar, Link, Location } from "../../styles/Icons";

const icon = css`
  width: 18px;
  height: 18px;

  fill: transparent;
  stroke: var(--gray);
`;

export const Avatar = styled.div`
  width: max(45px, min(135px, 22vw));
  height: max(45px, min(135px, 22vw));

  border: 4px solid var(--primary);
  background-color: var(--gray);
  border-radius: 50%;

  position: absolute;
  bottom: max(-60px, -10vw);
  left: 15px;
`;

export const Banner = styled.div`
  flex-shrink: 0;

  width: 100%;
  height: min(33vw, 199px);

  background: var(--twitter);

  position: relative;
`;

export const CalendarIcon = styled(Calendar)`
  ${icon}

  fill: var(--gray);
  stroke: transparent;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  max-height: 100%;
  overflow-y: auto;

  scrollbar-width: none;
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const Followage = styled.div`
  display: flex;

  > span {
    font-size: 15px;
    color: var(--gray);

    & + span {
      margin-left: 20px;
    }

    > strong {
      color: var(--white);
    }
  }
`;

export const LocationIcon = styled(Location)`
  ${icon}
`;

export const LinkIcon = styled(Link)`
  ${icon}
`;

export const ProfileData = styled.div`
  padding: min(calc(10vw + 5px), 65px) 16px 0;

  display: flex;
  flex-direction: column;

  position: relative;

  > h1 {
    font-weight: bold;
    font-size: 19px;
  }

  > h2 {
    font-weight: normal;
    font-size: 15px;

    color: var(--gray);
  }

  > p {
    font-size: 15px;
    margin-top: 12px;

    > a {
      text-decoration: none;
      color: var(--twitter);
    }

    > a:hover {
      text-decoration: underline;
    }
  }

  > ul {
    list-style: none;
    margin-top: 10px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;

      font-size: 15px;
      color: var(--gray);

      & + li {
        margin-left: 15px;
      }

      > a {
        color: var(--twitter);
        text-decoration: none;
        font-size: 15px;
      }

      > a:hover {
        text-decoration: underline;
      }

      > svg {
        margin-right: 5px;
      }
    }
  }
`;
