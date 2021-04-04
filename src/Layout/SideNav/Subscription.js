import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.15em;
  @media (min-width: 1001px) {
    width: 100%;
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

const Initial = styled.div`
  width: ${(props) => (!props.forceSide ? `100%` : `20%`)};
`;

const Name = styled.div`
  width: 100%;
  display: ${(props) => !props.forceSide && `none`};
`;

const Subscription = (props) => {
  const forceSide = useSelector((state) => state.user.forceSide);
  const history = useHistory();
  return (
    <Container
      onClick={() => {
        if (props.to) {
          history.push("/channel/" + props.to);
        }
      }}
      active={props.active ? 1 : 0}
    >
      <Initial forceSide={forceSide}>{props.name.charAt(0)}</Initial>
      <Name forceSide={forceSide ? 1 : 0}>{props.name}</Name>
    </Container>
  );
};

export default Subscription;
