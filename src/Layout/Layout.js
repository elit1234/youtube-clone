import styled from "styled-components";
import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Container = styled.div`
  background: #212121;
  height: 100vh;
  min-width: 100vw;
  max-width: 100vw;
  color: #fff;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  height: 92vh;
  min-width: 100vw;
  max-width: 100vw;
  width: 100%;
  display: flex;
  overflow-x: hidden;
`;

const PropContent = styled.div`
  padding: 0.5em;
  width: ${(props) => (props.showSide ? `100%` : `0%`)};
  ${(props) =>
    !props.showSide &&
    `
    min-width: 100%;
  `}
  transition: 1s;
`;

const Layout = (props) => {
  const loc = useLocation();
  const user = useSelector((state) => state.user);
  const showSide = user.showSide;

  useEffect(() => {
    let pageTitle = "Home - Eli Tube";
    if (loc.pathname.startsWith("/explore")) pageTitle = "Explore - Eli Tube";
    else if (loc.pathname.startsWith("/subscriptions"))
      pageTitle = "Subscriptions - Eli Tube";
    else if (loc.pathname.startsWith("/library"))
      pageTitle = "Library - Eli Tube";
    else if (loc.pathname.startsWith("/admin")) pageTitle = "Admin - Eli Tube";
    else if (loc.pathname.startsWith("/account"))
      pageTitle = `${
        user.name ? `${user.name}'s Account` : "Account - "
      } - Eli Tube`;
    document.title = pageTitle;
  }, [loc.pathname]);

  return (
    <Container>
      <TopNav />
      <Content>
        <SideNav />
        <PropContent showSide={showSide ? 1 : 0}>{props.children}</PropContent>
      </Content>
    </Container>
  );
};

export default Layout;
