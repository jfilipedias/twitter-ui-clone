import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Tab = styled.div`
  flex: 1 0 auto;

  padding: 12px 16px;

  font-size: 16px;
  color: var(--gray);
  text-align: center;

  background-color: transparent;

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: var(--dark-hover);
    border-bottom: 1px solid var(--dark-hover);
  }
`;

export const Tabs = styled.div`
  display: flex;
  align-items: center;

  margin-top: 15px;

  border-bottom: 1px solid var(--outline);

  & .active {
    font-weight: bold;
    color: var(--white);

    border-bottom: 2px solid var(--twitter);
  }
`;

export const Tweets = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
`;
