import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BlueButton, Input } from "./Styles";
import Notify from "../../Notify";
import { attemptSubmit } from "./func";
import { useDispatch } from "react-redux";
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

const RegisterView = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const dispatch = useDispatch();

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
      translateX: "100vw",
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
    console.log("clicked enter");
    if (!email || !name || !password || !confirm)
      return Notify("Please fill all the fields out");
    else if (password !== confirm)
      return Notify("Your two passwords do not match");
    else
      attemptSubmit({
        type: 2,
        email,
        password,
        name,
        dispatch,
      });
  };

  return (
    <Content
      variants={variants}
      animate={props.view ? "open" : "closed"}
      initial={props.view ? "open" : "closed"}
      exit="closed"
      show={props.view ? 1 : 0}
    >
      <Input
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        onKeyDown={(key) => {
          if (key.key === "Enter") handleClick();
        }}
      />
      <Input
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(key) => {
          if (key.key === "Enter") handleClick();
        }}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        onKeyDown={(key) => {
          if (key.key === "Enter") handleClick();
        }}
      />
      <Input
        placeholder="Confirm password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        type="password"
        onKeyDown={(key) => {
          if (key.key === "Enter") handleClick();
        }}
      />
      <BlueButton onClick={() => handleClick()}>Sign Up</BlueButton>
    </Content>
  );
};

export default RegisterView;
