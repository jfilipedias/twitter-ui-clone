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

  cursor: pointer;

  &:hover {
    background: var(--dark-hover);
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
