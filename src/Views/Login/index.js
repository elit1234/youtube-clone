import React, { useState } from "react";
import styled from "styled-components";
import LoginView from "./LoginView";
import RegisterView from "./RegisterView";
const Layout = React.lazy(() => import("../../Layout/Layout"));

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Paper = styled.div`
  width: 40vw;
  min-height: 50vh;
  height: 90%;
  @media (max-width: 1500px) {
    width: 80vw;
  }
  background: #282828;
  border-radius: 5%;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: flex;
  flex-direction: column;
`;

const Titles = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  height: 5vh;
`;

const Title = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: ${(props) => (!props.active ? "pointer" : "default")};
  ${(props) =>
    props.active &&
    `
        background: #353535;
    `}
  transition: background 0.5s;
  &:hover {
    background: #353535;
  }
  border-radius: 5%;
  text-transform: uppercase;
  font-weight: bold;
  color: ${(props) => (props.active ? "#fff" : "#818181")};
`;

const Content = styled.div`
  height: 90%;
  overflow: hidden;
`;

const Login = () => {
  const [view, setView] = useState(true);
  return (
    <Layout>
      <Container>
        <Paper>
          <Titles>
            <Title
              active={view ? 1 : 0}
              onClick={() => {
                if (!view) setView(true);
              }}
            >
              Login
            </Title>
            <Title
              active={!view ? 1 : 0}
              onClick={() => {
                if (view) setView(false);
              }}
            >
              Sign Up
            </Title>
          </Titles>
          <Content>
            <LoginView view={view ? 1 : 0} />
            <RegisterView view={!view ? 1 : 0} />
          </Content>
        </Paper>
      </Container>
    </Layout>
  );
};

export default Login;
