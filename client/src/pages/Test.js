import React from "react";
import { Redirect } from "react-router-dom";

import Doctors from "../components/Doctors";

const TestPage = ({ isAuthenticated }) => {
  if (!isAuthenticated) return <Redirect to="/" />;

  return (
    <div>
      <Doctors />
    </div>
  );
};
export default TestPage;
