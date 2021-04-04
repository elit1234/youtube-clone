import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Option from "./Option";
import Subscription from "./Subscription";

const Container = styled(motion.div)`
  @media (min-width: 1001px) {
    width: ${(props) => (props.showSide ? "300px" : "0%")};
  }
  @media (max-width: 1000px) {
    min-width: ${(props) => (props.showSide ? `100vw` : "0%")};
  }
  transition: 1s;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Hr = styled.hr`
  margin: 1.5em 0;
`;

const SubTitle = styled.div`
  color: #818181;
  padding-left: 10%;
  cursor: default;
`;

const SideNav = () => {
  const loc = useLocation();
  const showSide = useSelector((state) => state.user.showSide);
  const forceSide = useSelector((state) => state.user.forceSide);
  const loggedIn = useSelector((state) => state.user.email);
  const isAdmin = useSelector((state) => state.user.admin);
  const subscriptions = useSelector((state) => state.user.subscriptions);

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
  const [options, setOptions] = useState();
  const staticOptions = [
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
  ];

  let toggleString = forceSide ? "Shrink" : "Grow";

  useEffect(() => {
    setOptions(staticOptions);
    if (loggedIn) {
      let newOptions = [];
      if (isAdmin)
        newOptions.push(
          {
            name: "Admin",
            to: "/admin",
          },
          {
            hr: true,
          }
        );
      newOptions.push({
        subTitle: "My Subscriptions",
      });
      subscriptions &&
        subscriptions.map((sub, key) => {
          newOptions.push({
            type: "subscription",
            name: sub.name,
            to: sub.to,
          });
        });

      const newObj = [...staticOptions, ...newOptions];
      setOptions(newObj);
    }
  }, []);

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
          if (!option.hr && !option.subTitle && !option.type)
            return (
              <Option
                name={option.name}
                to={option.to}
                active={loc.pathname === option.to ? 1 : 0}
                key={key}
              />
            );
          else if (option.hr) return <Hr key={key} />;
          else if (option.subTitle)
            return <SubTitle key={key}>{option.subTitle}</SubTitle>;
          else if (option.type === "subscription")
            return (
              <Subscription
                name={option.name}
                to={option.to}
                key={key}
                active={loc.pathname.includes(option.to) ? 1 : 0}
              />
            );
        })}
      <Hr />
      <Option type="toggle" name={toggleString + " Nav"} />
    </Container>
  );
};

export default SideNav;
