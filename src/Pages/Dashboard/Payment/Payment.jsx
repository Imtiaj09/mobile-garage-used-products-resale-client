import React from "react";
import { useLoaderData } from "react-router-dom";

const Payment = () => {
  const booking = useLoaderData();
  console.log(booking);
  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Payment for {booking.productName}
      </h2>
      <p className="text-xl">
        Please pay {booking.sellingPrice} for your purchase product.
      </p>
    </div>
  );
};

export default Payment;
