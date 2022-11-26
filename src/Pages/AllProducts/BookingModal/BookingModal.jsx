import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";

const BookingModal = ({ buyProduct, setBuyProduct }) => {
  const { product_name, buying_price, selling_price } = buyProduct;
  const { user } = useContext(AuthContext);

  const handleBooking = (event) => {
    event.preventDefault();
    const from = event.target;
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;

    const booking = {
      sellingPrice: selling_price,
      productName: product_name,
      name,
      email,
      phone,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          setBuyProduct(null);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Booking Confirmed",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{product_name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-6"
          >
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Selling Price</span>
              </label>
              <input
                type="text"
                disabled
                value={selling_price}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Buying Price</span>
              </label>
              <input
                type="text"
                disabled
                value={buying_price}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Name</span>
              </label>
              <input
                name="name"
                type="text"
                defaultValue={user?.displayName}
                disabled
                placeholder="Your Name"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">User Email Address</span>
              </label>
              <input
                name="email"
                type="email"
                defaultValue={user?.email}
                disabled
                placeholder="Your Email Address"
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Your Phone Number</span>
              </label>
              <input
                name="phone"
                type="text"
                placeholder="Your Phone Number"
                className="input input-bordered w-full"
              />
            </div>
            <br />
            <input
              className="btn btn-primary w-full "
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
