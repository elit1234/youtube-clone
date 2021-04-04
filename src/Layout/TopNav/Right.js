import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { Dots, Apps } from "./Icons";

const Container = styled.div`
  @media (min-width: 901px) {
    padding-left: 3em;
    padding-right: 3em;
  }
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const SignInButton = styled.button`
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

const Right = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  return (
    <Container>
      <Apps />
      <Dots />
      <SignInButton
        onClick={() => {
          if (user.email) {
            history.push("/logout");
          } else history.push("/login");
        }}
      >
        {user.email ? "Sign Out" : "Sign In"}
      </SignInButton>
    </Container>
  );
};

export default Right;
