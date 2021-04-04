import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BlueButton, Input } from "./Styles";
import { attemptSubmit } from "./func";
import { useDispatch, useSelector } from "react-redux";
import Notify from "../../Notify";
import { useHistory } from "react-router-dom";

const Content = styled(motion.div)`
  width: ${(props) => (props.show ? "100%" : "0%")};
  height: ${(props) => (props.show ? "100%" : "0%")};
  display: flex;
  flex-direction: column;
  transition: width 2s;
  align-items: center;
  padding-top: 1em;
  justify-content: space-evenly;
`;

const LoginView = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userEmail = useSelector((state) => state.user.email);
  const history = useHistory();

  const variants = {
    open: {
      translateX: 0,
      transition: {
        translateX: {
          duration: 1,
          type: "spring",
          duration: 2,
        },
      },
    },
    closed: {
      translateX: "-100vw",
      transition: {
        translateX: {
          duration: 1,
          type: "spring",
          duration: 2,
        },
      },
    },
  };

  const handleClick = () => {
    if (email.length > 6 && password.length > 5) {
      return attemptSubmit({
        email,
        password,
        type: 1,
        dispatch,
      });
    } else Notify("Please enter a valid username and password");
  };

  useEffect(() => {
    if (userEmail) {
      history.push("/account");
    }
  }, [userEmail]);

  return (
    <Content
      variants={variants}
      animate={props.view ? "open" : "closed"}
      initial={props.view ? "open" : "closed"}
      exit="closed"
      show={props.view ? 1 : 0}
      onKeyUp={(key) => {
        if (key.key === "Enter") return handleClick();
      }}
    >
      <Input
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        onKeyUp={(key) => {
          if (key.key === "Enter") return handleClick();
        }}
      />
      <BlueButton
        onClick={() => {
          handleClick();
        }}
      >
        Login
      </BlueButton>
    </Content>
  );
};

export default LoginView;
