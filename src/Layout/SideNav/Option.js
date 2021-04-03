import React from 'react'
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { Home, Explore, Subscriptions, Library } from "./Icons";

const Container = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.15em;
    @media (min-width: 1001px) {
        width: 90%;
    }
    height: 50px;
    background: ${props => props.active ? `#383838` : `#212121`};
    &:hover {
        background: #383838;
    }
    transition: background 0.3s;
    cursor: pointer;
    padding-left: 10%;
`

const IconWrapper = styled.div`
    width: 20%;
`

const IconText = styled.div`
    @media (max-width: 1000px) {
        display: none;
    }
`;

const Option = (props) => {
    const history = useHistory();


    const getIcon = (name) => {
        switch(name) {
            case "Home": return <Home />;
            case "Explore": return <Explore />
            case "Subscriptions": return <Subscriptions />
            case "Library": return <Library />
            default: return <></>
        }
    }

    return (
        <Container active={props.active ? 1 : 0} onClick={() => {
            if(props.to) history.push(props.to)
        }}>
            <IconWrapper>
                {props.name && getIcon(props.name)}
            </IconWrapper>
            <IconText>
                {props.name}
            </IconText>
        </Container>
    )
}

export default Option
