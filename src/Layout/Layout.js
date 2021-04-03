import styled from "styled-components";
import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const Container = styled.div`
    background: #212121;
    height: 100vh;
    color: #fff;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    height: 92vh;
    display: flex;
`

const PropContent = styled.div`
    padding: 0.5em;
`

const Layout = (props) => {

    const loc = useLocation();

    useEffect(() => {
        let pageTitle = "Home - Eli Tube";
        if(loc.pathname.startsWith("/explore")) pageTitle = "Explore - Eli Tube"
        else if(loc.pathname.startsWith("/subscriptions")) pageTitle = "Subscriptions - Eli Tube";
        else if(loc.pathname.startsWith("/library")) pageTitle = "Library - Eli Tube";
        document.title = pageTitle;
    }, [loc.pathname])

    return (
        <Container>
            <TopNav />
            <Content>
                <SideNav />
                <PropContent>
                    {props.children}
                </PropContent>
            </Content>
        </Container>
    )
}

export default Layout;