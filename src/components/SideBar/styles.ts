import styled from "styled-components";

import { Search } from "../../styles/Icons";

export const Container = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;

    min-width: min(399px, 100%);
  }
`;

export const SearchWrapper = styled.div`
  padding: 10px 24px;
  width: min(399px, 100%);
  max-height: 57px;

  position: fixed;
  top: 0;
  z-index: 2;
  background: var(--primary);
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 39px;
  padding: 0 10px 0 52px;
  border-radius: 20px;

  background: var(--search);

  font-size: 14px;

  &::placeholder {
    color: var(--gray);
  }

  ~ svg {
    position: relative;
    top: -33px;
    left: 15px;
    z-index: 1;

    transition: 180ms ease-in-out;
  }

  &:focus {
    outline: 1px solid var(--twitter);

    ~ svg {
      stroke: var(--twitter);
    }
  }
`;

export const SearchIcon = styled(Search)`
  width: 27px;
  height: 27px;

  stroke: var(--gray);
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;

  padding: 57px 24px 200px;
  margin-top: 4px;
`;
