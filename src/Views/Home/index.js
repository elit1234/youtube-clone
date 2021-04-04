import React from "react";
const Layout = React.lazy(() => import("../../Layout/Layout"));

const Home = () => {
  return (
    <Layout>
      <h1>Home</h1>
    </Layout>
  );
};

export default Home;
