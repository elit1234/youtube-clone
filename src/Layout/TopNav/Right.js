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
`

const SignInButton = styled.button`
    background: transparent;
    padding: 0.5em 2em;
    white-space: nowrap;
    color: #3EA6FF;
    text-transform: uppercase;
    font-size: 1.05em;
    border: solid 1px #3EA6FF;
    cursor: pointer;
    &:hover {
        background: #3EA6FF;
        color: #000;
    }
    transition: 0.5s ease-in-out;
`

const Right = () => {


    return (
        <Container>
            <Apps />
            <Dots />
            <SignInButton>
                Sign In
            </SignInButton>
        </Container>
    )

}

export default Right;