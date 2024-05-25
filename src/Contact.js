import React from "react";

const Contact = ({ onClick }) => {
  return <div onClick={() => onClick("Contact")}>Contact Screen</div>;
};

export default Contact;
