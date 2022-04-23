import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--secondary);
  border-radius: 14px;
  overflow: hidden;
`;

export const Item = styled.div`
  padding: 10px 16px;

  transition: background-color 0.2s ease;

  & + div:hover {
    background-color: var(--search);
  }

  &:first-child {
    padding-top: 13px;
  }

  &:last-child {
    padding-bottom: 17px;
  }
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 19px;
`;

export const ShowMore = styled.span`
  padding: 10px 0;
  color: var(--twitter);
  font-size: 14px;
  cursor: pointer;
`;
