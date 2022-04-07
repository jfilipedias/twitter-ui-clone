import styled from "styled-components";

import { ArrowLeft } from "../../styles/Icons";

export const BackIcon = styled(ArrowLeft)`
  width: 20px;
  height: 20px;

  fill: var(--white);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  width: min(601px, 100%);

  @media (min-width: 500px) {
    border-left: 1px solid var(--outline);
    border-right: 1px solid var(--outline);
  }
`;

export const Header = styled.div`
  z-index: 2;
  position: sticky;
  top: 0;
  background: var(--primary);

  display: flex;
  align-items: center;

  text-align: left;

  padding: 8px 0 9px 13px;
  border-bottom: 1px solid var(--outline);

  > button {
    padding: 10px;
    border-radius: 50%;
    background-color: transparent;
    outline: 0;

    cursor: pointer;

    transition: background-color 0.2s ease, outline 0.1s ease;

    &:hover,
    &:focus {
      background-color: var(--twitter-dark-hover);
    }

    &:focus {
      outline: 2px solid var(--white);
    }
  }
`;
