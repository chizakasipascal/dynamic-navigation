import React from "react";

const About = ({ onClick }) => {
  return <div onClick={() => onClick("About")}>About Screen</div>;
};

export default About;
