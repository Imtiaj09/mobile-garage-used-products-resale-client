import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../context/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const AddAProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_key;
  const { user } = useContext(AuthContext);

  const currentDate = new Date();
  const date = currentDate.toDateString();
  const time = currentDate.toLocaleTimeString();
  const navigate = useNavigate();

  const handleAddAProduct = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          console.log(imgData.data.url);
          const product = {
            categories_id: data.category,
            product_name: data.productname,
            author: {
              name: data.name,
              email: data.email,
            },
            published_date: { date, time },
            image_url: imgData.data.url,
            details: data.details,
            selling_price: data.sellingprice,
            buying_price: data.buyingprice,
            duration_use: data.durationuse,
            location: data.location,
          };
          console.log(product);
          //save Add products to the products collection
          fetch("https://mobile-garage-server-pi.vercel.app/categories", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(product),
          })
            .then((res) => res.json())
            .then((result) => {
              console.log(result);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Booking Confirmed",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate("/dashboard/myproduct");
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold">Add A Product</h2>
      {user?.email && (
        <form onSubmit={handleSubmit(handleAddAProduct)}>
          <div className="form-control  w-full max-w-lg">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              defaultValue={user?.displayName}
              readOnly
              {...register("name")}
              className="input input-bordered max-w-lg"
              placeholder="User name"
            />
          </div>
          <div className="max-w-lg mt-4">
            <label className="label">
              <span className="label-text">Select A Category Of Product</span>
            </label>
            <select
              className="select select-bordered w-full max-w-lg"
              {...register("category", { required: true })}
            >
              <option value="iphone">iphone</option>
              <option value="pixel">pixel</option>
              <option value="samsung">samsung</option>
            </select>
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              defaultValue={user?.email}
              readOnly
              {...register("email")}
              className="input input-bordered w-full max-w-lg"
              placeholder="Enter your email"
            />
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Product Name</span>
            </label>
            <input
              type="text"
              {...register("productname", {
                required: "Product Name is required",
              })}
              className="input input-bordered max-w-lg"
              placeholder="Product Name"
            />
            {errors.productname && (
              <p className="text-red-500">{errors.productname?.message}</p>
            )}
          </div>

          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Upload Your Product Photo</span>
            </label>
            <input
              type="file"
              {...register("image", { required: "Photo is required" })}
              className="input input-bordered w-full max-w-lg"
              placeholder="Enter the photo"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Buying Price</span>
            </label>
            <input
              type="text"
              {...register("buyingprice", {
                required: "Buying Price is required",
              })}
              className="input input-bordered max-w-lg"
              placeholder="Buying Price"
            />
            {errors.buyingprice && (
              <p className="text-red-500">{errors.buyingprice?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Selling Price</span>
            </label>
            <input
              type="text"
              {...register("sellingprice", {
                required: "Selling Price is required",
              })}
              className="input input-bordered max-w-lg"
              placeholder="Selling Price"
            />
            {errors.sellingprice && (
              <p className="text-red-500">{errors.sellingprice?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Details</span>
            </label>
            <input
              type="text"
              {...register("details", {
                required: "Details is required",
              })}
              className="input input-bordered max-w-lg"
              placeholder="Phone Details"
            />
            {errors.details && (
              <p className="text-red-500">{errors.details?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Duration Of Use</span>
            </label>
            <input
              type="text"
              {...register("durationuse", {
                required: "Phone Duration of Use is required",
              })}
              className="input input-bordered max-w-lg"
              placeholder="Duration Use Phone"
            />
            {errors.durationuse && (
              <p className="text-red-500">{errors.durationuse?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-lg">
            <label className="label">
              <span className="label-text">Your Location</span>
            </label>
            <input
              type="text"
              {...register("location", {
                required: "Location is required",
              })}
              className="input input-bordered max-w-lg"
              placeholder="Your Location"
            />
            {errors.location && (
              <p className="text-red-500">{errors.location?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full max-w-lg mt-6"
            value="Sign Up"
            type="submit"
          />
        </form>
      )}
    </div>
  );
};

export default AddAProduct;
