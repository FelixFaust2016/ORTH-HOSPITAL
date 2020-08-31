import React from "react";
import { Redirect } from "react-router-dom";

import Login from "../components/Login";

const LoginAuth = ({ authType, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/dashboard" />;

  return (
    <>
      <Login authType={authType} />
    </>
  );
};

export default LoginAuth;
