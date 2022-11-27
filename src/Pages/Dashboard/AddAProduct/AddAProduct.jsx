import React from "react";
import { useForm } from "react-hook-form";

const AddAProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const imgHostKey = process.env.REACT_APP_imgbb_key;

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
        }
      });
  };

  return (
    <div>
      <h2 className="text-4xl font-semibold">Add A Product</h2>
      <form onSubmit={handleSubmit(handleAddAProduct)}>
        <div className="form-control  w-full max-w-lg">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required",
            })}
            className="input input-bordered max-w-lg"
            placeholder="User name"
          />
          {errors.name && <p className="text-red-600">{errors.name.message}</p>}
        </div>
        <div className="max-w-lg mt-4">
          <label className="label">
            <span className="label-text">Select A Category Of Product</span>
          </label>
          <select
            className="select select-bordered w-full max-w-lg"
            {...register("category", { required: true })}
          >
            <option value="user">iphone</option>
            <option value="seller">pixel</option>
            <option value="seller">samsung</option>
          </select>
        </div>
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="text"
            {...register("email", { required: "Email Address is required" })}
            className="input input-bordered w-full max-w-lg"
            placeholder="Enter your email"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email?.message}</p>
          )}
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
        <div className="form-control w-full max-w-lg">
          <label className="label">
            <span className="label-text">Date</span>
          </label>
          <input
            type="text"
            {...register("publishdate", {
              required: "Publish date required",
            })}
            className="input input-bordered max-w-lg"
            placeholder="Publish Date"
          />
        </div>
        <input
          className="btn btn-accent w-full max-w-lg mt-6"
          value="Sign Up"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddAProduct;
