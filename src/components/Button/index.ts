import styled from "styled-components";

interface Props {
  outlined?: boolean;
}

export const Button = styled.button<Props>`
  background: ${(props) => (props.outlined ? "transparent" : "var(--white)")};
  color: ${(props) => (props.outlined ? "var(--white)" : "var(--primary)")};
  border: ${(props) =>
    props.outlined ? "1px solid var(--outline-button)" : "none"};

  padding: 16px;
  border-radius: 25px;

  font-weight: bold;
  font-size: 15px;

  cursor: pointer;
  outline: 0;

  transition: background-color 0.2s ease, outline 0.1s ease;

  &:hover {
    background: ${(props) =>
    props.outlined ? "var(--dark-hover)" : "var(--light-hover)"};
  }

  &:focus {
    outline: 2px solid var(--white);
  }
`;
