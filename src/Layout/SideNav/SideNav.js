import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Option from "./Option";

const Container = styled(motion.div)`
  @media (min-width: 1001px) {
    width: ${(props) => (props.showSide ? "300px" : "0%")};
  }
  @media (max-width: 1000px) {
    width: ${(props) =>
      props.showSide ? (props.forceSide ? "300px" : "150px") : "0%"};
  }
  @media (max-width: 600px) {
    min-width: ${(props) => (props.showSide ? `100vw` : "0%")};
  }
  transition: 1s;
`;

const Hr = styled.hr`
  margin: 1.5em 0;
`;

const SubTitle = styled.div`
  background: red;
  color: #fff;
`;

const SideNav = () => {
  const loc = useLocation();
  const showSide = useSelector((state) => state.user.showSide);
  const forceSide = useSelector((state) => state.user.forceSide);
  const loggedIn = useSelector((state) => state.user.email);

  const variants = {
    open: {
      translateX: 0,
      transition: {
        translateX: {
          duration: 0.5,
          stiffness: 50,
          damping: 15,
        },
      },
    },
    closed: {
      translateX: -300,
      transition: {
        translateX: {
          duration: 0.5,
          stiffness: 50,
          damping: 50,
        },
      },
    },
  };

  const options = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "Explore",
      to: "/explore",
    },
    {
      name: "Subscriptions",
      to: "/subscriptions",
    },
    {
      hr: true,
    },
    {
      name: "Library",
      to: "/library",
    },
    {
      name: "Account",
      to: loggedIn ? "/account" : "/login",
    },
    {
      hr: true,
    },
    {
      subTitle: "My Subscriptions",
    },
  ];

  let toggleString = forceSide ? "Shrink" : "Grow";

  return (
    <Container
      variants={variants}
      initial={showSide ? "open" : "closed"}
      animate={showSide ? "open" : "closed"}
      showSide={showSide ? 1 : 0}
      forceSide={forceSide ? 1 : 0}
    >
      {options &&
        options.map((option, key) => {
          if (!option.hr)
            return (
              <Option
                name={option.name}
                to={option.to}
                active={loc.pathname === option.to ? 1 : 0}
                key={key}
              />
            );
          else if (option.hr) return <Hr key={key} />;
          // else return <Hr key={key} />;
        })}
      <Hr />
      <Option type="toggle" name={toggleString + " Nav"} />
    </Container>
  );
};

export default SideNav;
