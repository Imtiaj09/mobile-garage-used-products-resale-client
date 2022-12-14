import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckoutFrom from "./CheckoutFrom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);
console.log(stripePromise);

const Payment = () => {
  const booking = useLoaderData();
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return <Loading />;
  }

  return (
    <div>
      <h2 className="text-3xl font-semibold">
        Payment for {booking.productName}
      </h2>
      <p className="text-xl">
        Please pay <strong>${booking.sellingPrice}</strong> for your purchase
        product.
      </p>
      <div className="w-96 my-6">
        <Elements stripe={stripePromise}>
          <CheckoutFrom booking={booking} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
