import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

import { actions } from "../../redux/user";
import { Home, Explore, Subscriptions, Library, Login } from "./Icons";
import { useWindowSize } from "../func";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.15em;
  @media (min-width: 1001px) {
    width: 90%;
    ${(props) => props.toggle && "display: none"};
  }
  height: 50px;
  background: ${(props) => (props.active ? "#383838" : "#212121")};
  &:hover {
    background: #383838;
  }
  transition: background 0.3s;
  cursor: pointer;
  padding-left: 10%;
`;

const IconWrapper = styled.div`
  width: 20%;
`;

const IconText = styled.div`
  ${(props) =>
    props.forceSide
      ? ""
      : `
    @media (max-width: 1000px) {
        opacity: 0;
        ${Container}:hover & {
            opacity: 1;
        }
        transition: 0.3s;
    }
    `}
`;

const Option = (props) => {
  const history = useHistory();
  const forceSide = useSelector((state) => state.user.forceSide);

  const size = useWindowSize();

  const getIcon = (name) => {
    switch (name) {
      case "Home":
        return <Home />;
      case "Explore":
        return <Explore />;
      case "Subscriptions":
        return <Subscriptions />;
      case "Library":
        return <Library />;
      case "Account":
        return <Login />;
      default:
        return <></>;
    }
  };

  const dispatch = useDispatch();

  return (
    <Container
      toggle={props.type === "toggle" ? 1 : 0}
      active={props.active ? 1 : 0}
      onClick={() => {
        if (props.to && props.type !== "toggle") {
          history.push(props.to);
          if (size.width < 601) {
            dispatch(actions.hideNav());
          }
        } else if (props.type === "toggle") {
          if (forceSide) {
            dispatch(actions.shrinkNav());
          } else dispatch(actions.largeNav());
        }
      }}
    >
      <IconWrapper>{props.name && getIcon(props.name)}</IconWrapper>
      <IconText
        forceSide={
          props.type && props.type === "toggle" ? 1 : forceSide ? 1 : 0
        }
      >
        {props.name}
      </IconText>
    </Container>
  );
};

export default Option;
