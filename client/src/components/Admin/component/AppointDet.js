import React from "react";

const Det = (props) => {
  return (
    <div className="admin-app-det">
      <div>
        <h5>Doctors name:</h5>{" "}
        <p>
          {props.docfirstname} {props.doclastname}
        </p>
      </div>
      <div>
        <h5>Date:</h5> <p>{props.date}</p>
      </div>
      <div>
        <h5>Time:</h5> <p>{props.time}</p>
      </div>
      <div>
        <h5>Description:</h5> <p>{props.subject}</p>
      </div>
    </div>
  );
};

export default Det;
