import React from 'react'
import styled from "styled-components";
import Center from './Center';
import Left from './Left';
import Right from './Right';

const Container = styled.div`
    background: #202020;
    height: 8vh;
    display: flex;
    align-items: center;
    max-width: 100%;
`;
const TopNav = () => {
    return (
        <Container>
            <Left />
            <Center />
            <Right />
        </Container>
    )
}

export default TopNav
