import React from "react";
import image from "../images/Group 1.png";

const Home = () => {
  return (
    <div className="home">
      <h2>Welcome to</h2>
      <h1>Grandma's Kitchen</h1>
      <img id="img" src={image} alt="" />
    </div>
  );
};

export default Home;
