import styled from "styled-components";

import { Button } from "../Button";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ProfileInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: var(--gray);
  margin-right: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  font-size: 16px;

  > span {
    color: var(--gray);
  }
`;

export const FollowButton = styled(Button)`
  padding: 8px 18px;
  font-size: 14px;
  color: var(--secondary);
`;
