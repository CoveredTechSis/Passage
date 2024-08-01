import React from "react";
import "./Home.css";
import { Header } from "../../Components/Header/Header";
import { Carousel } from "../../Components/Carousel/Carousel";
// import { EventPost } from "../../Components/EventPost/EventPost";
import { Category } from "../../Components/Category/Category";
import { FreeEvents } from "../../Components/FreeEvents/FreeEvents";
import { PaidEvents } from "../../Components/PaidEvents/PaidEvents";
import { Discounts } from "../../Components/Discounts/Discounts";
import { Cities } from "../../Components/Cities/Cities";
import { Jobs } from "../../Components/Jobs/Jobs";

const Home = () => {
  return (
    <div>
      <Header />
      <Carousel />
      {/* <EventPost /> */}
      <Category/>
      <FreeEvents/>
      <PaidEvents/>
      <Discounts/>
      <Cities/>
      <Jobs/> 
    </div>
  );
};
export default Home;
