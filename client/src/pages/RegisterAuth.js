import React from "react";
import { Redirect } from "react-router-dom";

import Register from "../components/Register";
import ErrorMessage from "../components/Error";

const RegisterAuth = ({ authType, isAuthenticated }) => {
  if (isAuthenticated) return <Redirect to="/dashboard" />;


  return (
    <>
      <Register authType={authType}/>
    </>
  );
};

export default RegisterAuth;
