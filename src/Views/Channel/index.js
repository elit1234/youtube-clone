import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../../Layout/Layout";
const Channel = () => {
  const params = useParams();
  const { channelid } = params;
  return (
    <Layout>
      <h1>Channel: {channelid}</h1>
    </Layout>
  );
};

export default Channel;
