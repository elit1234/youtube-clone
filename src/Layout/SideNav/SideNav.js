import React from 'react'
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Option from './Option';

const Container = styled(motion.div)`
    width: ${props => props.showSide ? `300px` : `0%`};
    transition: 1s;
    background: #252525;
`;

const Hr = styled.hr`

`;

const SideNav = () => {
    const loc = useLocation();
    const showSide = useSelector((state) => state.user.showSide)
    const user = useSelector((state) => state.user)
    const variants = {
        open: {
            translateX: 0,
            transition: {
                translateX: {
                    duration: 0.5,
                    stiffness: 50,
                    damping: 15
                }
            }
        },
        closed: {
            translateX: -300,
            transition: {
                translateX: {
                    duration: 0.5,
                    stiffness: 50,
                    damping: 50
                }
            }
        }
    }

    const options = [
        {
            name: "Home",
            to: "/",
        },
        {
            name: "Explore",
            to: "/explore"
        },
        {
            name: "Subscriptions",
            to: "/subscriptions"
        },
        {
            hr: true
        },
        {
            name: "Library",
            to: "/library"
        }
    ]

    return (
        <Container variants={variants} initial={showSide ? "open" : "closed"} animate={showSide ? "open" : "closed"} showSide={showSide ? 1 : 0} >
            {options && options.map((option, key) => {
                if(!option.hr)
                    return <Option name={option.name} to={option.to} active={loc.pathname === option.to ? 1 : 0} key={key} />
                else return <Hr />
            })}
        </Container>
    )
}

export default SideNav
