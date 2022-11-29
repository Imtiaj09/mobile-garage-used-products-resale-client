import React from "react";
import Swal from "sweetalert2";

const MyProductCard = ({ product }) => {
  const {
    product_name,
    author,
    image_url,
    details,
    selling_price,
    buying_price,
    duration_use,
    location,
    published_date,
  } = product;

  const handleAdvertisement = (_id) => {
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Advertisement successfully added.",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="max-w-lg p-4 shadow-md ">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <p className="mb-0 capitalize dark:text-black">
            Name: {author?.name}
          </p>
        </div>
        <p>Email: {author?.email}</p>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={image_url}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
          />
          <div className="flex items-center text-xs">
            <span>
              {published_date?.date || author?.published_date}{" "}
              {published_date?.time}
            </span>
          </div>
          <div>
            <p className="text-xl font-bold">{product_name}</p>
            <p className="text-lg">Selling Price: ${selling_price}</p>
            <p className="text-lg">Buying Price: ${buying_price}</p>
            <small className="text-sm">Duration of Use: {duration_use}</small>
          </div>
        </div>
        <div className="space-y-2">
          <h3 className="text-xl font-semibold dark:text-violet-400">
            <span className="font-bold">Details About Phone:</span> {details}
          </h3>
          <p className="leading-snug dark:text-black">
            <span className="font-semibold">Your location: </span>
            {location}
          </p>
        </div>
        {product?.advertise !== true && (
          <button
            onClick={() => handleAdvertisement(product._id)}
            className="btn btn-xs btn-primary"
          >
            Advertisement
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProductCard;
