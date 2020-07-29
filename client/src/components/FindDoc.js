import React, { Component } from "react";

import doc from "../img/stat-dash/doc-f.png";

const ProfileDash = () => {
  return (
    <div className="find-doc-cont">
      <div style={{width:'50%'}}>
        <div style={{width:"100%"}}><img style={{width:"100%"}} src={doc} /></div>
        <button style={{fontSize:'10px'}} className="btn">Find Doctor</button>
      </div>
    </div>
  );
};

export default ProfileDash;
