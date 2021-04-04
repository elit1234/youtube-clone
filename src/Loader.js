import React from "react";
import styled, { keyframes } from "styled-components";

const Spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const MyLoader = styled.div`
  margin: 0 auto;
  border: ${(props) =>
    props.size === "small" ? `8px solid #f3f3f3` : `16px solid #f3f3f3`};
  border-radius: 50%;
  border-top: ${(props) =>
    props.size === "small" ? `8px solid #3498db` : `16px solid #3498db`};
  width: ${(props) => (props.size === "small" ? `60px` : `150px`)};
  min-height: ${(props) => (props.size === "small" ? `60px` : `150px`)};
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: ${Spin} 2s linear infinite;
`;

const Loader = ({ size }) => {
  return <MyLoader size={size} />;
};

export default Loader;
