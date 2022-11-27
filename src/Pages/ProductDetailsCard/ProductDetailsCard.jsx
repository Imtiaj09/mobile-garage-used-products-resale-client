import React from "react";

const ProductDetailsCard = ({ product, setBuyProduct }) => {
  const {
    product_name,
    author,
    image_url,
    details,
    selling_price,
    buying_price,
    duration_use,
    location,
    is_Verified,
  } = product;

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
              {author?.published_date.date} {author?.published_date.time} ago
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
            <span className="font-semibold">
              Meting Location or Your location:
            </span>{" "}
            {location}
          </p>
        </div>
      </div>
      <div className="mt-4 card-actions justify-end">
        <label
          htmlFor="booking-modal"
          className="btn btn-sm btn-primary"
          onClick={() => setBuyProduct(product)}
        >
          Book Now
        </label>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
