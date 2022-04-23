import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 14px;

  > strong,
  span {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  > span {
    color: var(--gray);
    margin-bottom: 3px;
  }
`;
