import React from "react";
import Category from "../../Categories/Category/Category";
import Advertisement from "../Advertisement/Advertisement/Advertisement";
import Banner from "../Banner/Banner";
import Overview from "../Overview/Overview";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner />
      <Category />
      <Advertisement />
      <Overview />
    </div>
  );
};

export default Home;
