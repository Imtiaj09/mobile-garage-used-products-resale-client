import React from "react";
import banner from "../../../assets/images/banner1.jpg";

const Banner = () => {
  return (
    <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={banner} alt="" className="lg:w-1/2 rounded-lg shadow-2xl" />
        <div>
          <h1 className="text-5xl font-bold">
            Mobile phones you love the most.
          </h1>
          <p className="py-6">
            Mobile is the enabling centerpiece of digital convergence. Mobile is
            the glue for all other digital industries to use when approaching
            convergence, but mobile is also the digital gateway for the real
            world to join in this global metamorphosis of human behavior.
          </p>
          <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white">
            Get stated
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
