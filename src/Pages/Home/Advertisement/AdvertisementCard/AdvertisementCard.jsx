import React from "react";

const AdvertisementCard = ({ advertise }) => {
  const { image_url, product_name, selling_price, details } = advertise;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_name}</h2>
        <p className="text-lg">Selling Price: {selling_price}</p>
        <p className="text-sm">
          <span className="font-semibold">Details: </span>
          {details}
        </p>
      </div>
    </div>
  );
};

export default AdvertisementCard;
