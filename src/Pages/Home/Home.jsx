import React from "react";
import "./Home.css";
import { Header } from "../../Components/Header/Header";
import { Carousel } from "../../Components/Carousel/Carousel";
import { EventPost } from "../../Components/EventPost/EventPost";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <EventPost />
    </div>
  );
};
export default Home;
