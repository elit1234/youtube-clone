import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Layout = React.lazy(() => import("../../Layout/Layout"));

const Account = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  let pageTitle = user.name
    ? `${user.name}'s account`
    : user.email
    ? `${user.email}'s account`
    : "Your Account";

  useEffect(() => {
    if (!user.email) {
      history.push("/login");
    }
  }, []);
  return (
    <Layout>
      <h1>{pageTitle}</h1>
    </Layout>
  );
};

export default Account;
