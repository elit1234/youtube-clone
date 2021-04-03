import styled from "styled-components";
import SideNav from "./SideNav/SideNav";
import TopNav from "./TopNav/TopNav";

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

const Layout = (props) => {
    return (
        <Container>
            <TopNav />
            <Content>
                <SideNav />
                {props.children}
            </Content>
        </Container>
    )
}

export default Layout;