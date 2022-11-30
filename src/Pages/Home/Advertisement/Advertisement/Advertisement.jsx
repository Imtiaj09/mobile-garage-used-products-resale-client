import React, { useEffect, useState } from "react";
import AdvertisementCard from "../AdvertisementCard/AdvertisementCard";

const Advertisement = () => {
  const [advertisement, setAdvertisement] = useState();

  useEffect(() => {
    fetch("https://mobile-garage-server-pi.vercel.app/products/advertise")
      .then((res) => res.json())
      .then((data) => setAdvertisement(data));
  }, []);
  console.log(advertisement);

  return (
    <div className="mt-10">
      <h4 className="text-center text-3xl font-semibold">
        Advertisement Section
      </h4>
      <div className="mt-6 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {advertisement?.map((advertise) => (
          <AdvertisementCard
            key={advertise._id}
            advertise={advertise}
          ></AdvertisementCard>
        ))}
      </div>
    </div>
  );
};

export default Advertisement;
