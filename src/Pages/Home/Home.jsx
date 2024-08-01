import React from "react";
import "./Home.css";
import { Header } from "../../Components/Header/Header";
import { Carousel } from "../../Components/Carousel/Carousel";
import { EventPost } from "../../Components/EventPost/EventPost";
import { Category } from "../../Components/Category/Category";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <EventPost />
      <Category/>
    </div>
  );
};
export default Home;
