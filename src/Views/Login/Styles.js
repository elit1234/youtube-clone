import styled from "styled-components";

const BlueButton = styled.button`
  background: transparent;
  padding: 0.5em 2em;
  white-space: nowrap;
  color: #3ea6ff;
  text-transform: uppercase;
  font-size: 1.05em;
  border: solid 1px #3ea6ff;
  cursor: pointer;
  &:hover {
    background: #3ea6ff;
    color: #000;
  }
  transition: 0.5s ease-in-out;
`;

const Input = styled.input`
  background: #121212;
  width: 80%;
  padding: 0.5em;
  color: #fff;
  border: none;
  &:focus {
    outline: none;
    box-shadow: none;
  }
  font-size: 16px;
  cursor: default;
`;

export { BlueButton, Input };
