import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { BlueButton, Input } from "./Styles";

const Content = styled(motion.div)`
  width: ${(props) => (props.show ? "100%" : "0%")};
  height: ${(props) => (props.show ? "100%" : "0%")};
  display: flex;
  flex-direction: column;
  transition: width 1s;
  align-items: center;
  padding-top: 1em;
  justify-content: space-evenly;
`;

const RegisterView = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const variants = {
    open: {
      translateX: 0,
      transition: {
        translateX: {
          duration: 1,
          type: "spring",
        },
      },
    },
    closed: {
      translateX: "100vw",
      transition: {
        translateX: {
          duration: 1,
          type: "spring",
        },
      },
    },
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
      />
      <Input
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Input
        placeholder="Confirm password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      <BlueButton>Sign Up</BlueButton>
    </Content>
  );
};

export default RegisterView;
