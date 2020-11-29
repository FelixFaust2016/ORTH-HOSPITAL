import React from "react";

import Navigation from "../component/SlideNav";
import TopNav from "../../TopNav";
import DoctorForm from "../component/DoctorForm";
import AdminForm from "../component/AdminForm";

const Create = () => {
  return (
    <div className="dash-cont">
      <div className="nav">
        <Navigation />
      </div>
      <div className="side">
        <div style={{ width: "100%", margn: "0px auto" }}>
          <TopNav title={"Create"} />
          <div className="create-form-cont ">
            {/* <DoctorForm /> */}
            <AdminForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
