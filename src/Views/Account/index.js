import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const Layout = React.lazy(() => import("../../Layout/Layout"));

const Account = () => {
  const user = useSelector((state) => state.user);
  const history = useHistory();

  useEffect(() => {
    if (!user.email) {
      history.push("/login");
    }
  }, []);
  return (
    <Layout>
      <h1>
        {user.name ? user.name : user.email ? user.email : "Your Account"} 's
        account
      </h1>
    </Layout>
  );
};

export default Account;
