import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Layout from "../../Layout/Layout";

const Options = styled.div`
  display: flex;
  align-items: center;
  background: red;
  @media (max-width: 900px) {
    flex-direction: column;
  } ;
`;

const OptionContainer = styled.div`
  width: 30%;
  @media (max-width: 900px) {
    width: 80%;
  }
  min-height: 50vh;
  height: 90%;

  background: #282828;
  border-radius: 5%;
  box-shadow: 0 1px 30px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);

  display: flex;
  justify-content: center;
  font-size: 1.25rem;
  align-items: center;
  margin: 1em;
  padding: 1em;
  cursor: pointer;
  &:hover {
    transform: scale(1.01);
  }
  transform: scale(1);
  transition: transform 0.25s ease-in-out;
`;

const Admin = () => {
  const history = useHistory();

  const user = useSelector((state) => state.user);
  const isAdmin = user.admin ? user.admin : false;

  useEffect(() => {
    if (!isAdmin) history.push("/");
  }, []);

  return (
    <Layout>
      <Options>
        <OptionContainer
          onClick={() => {
            history.push("/admin/users");
          }}
        >
          Manage Users
        </OptionContainer>
        <OptionContainer>View Reports</OptionContainer>
        <OptionContainer>Manage Emails</OptionContainer>
      </Options>
    </Layout>
  );
};

export default Admin;
