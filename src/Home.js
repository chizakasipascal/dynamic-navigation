import React from "react";

const Home = ({ onClick }) => {
  return <div onClick={() => onClick("Home")}>Home Screen</div>;
};

export default Home;
