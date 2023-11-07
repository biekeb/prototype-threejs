import React from "react";
import image from "../images/Group 5.png";
import overlay from "../images/Image 14.png";
import grandma from "../images/grandma.png";

const Home = () => {
  return (
    <div className="home">
      {/* <h2>Welcome to</h2>
      <h1>Grandma's Kitchen</h1> */}
      <img id="home-img" src={image} alt="" />
      <img id="grandma-img" src={grandma} alt="" />
      <img id="overlay" src={overlay} alt="" />

    </div>
  );
};

export default Home;
