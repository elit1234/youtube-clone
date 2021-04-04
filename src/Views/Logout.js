import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { actions } from "../redux/user";

const Logout = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  dispatch(actions.signOut());
  useEffect(() => {
    history.push("/login");
  }, []);
  return null;
};

export default Logout;
