import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleSignUp = (data) => {
    console.log(data);
    console.log(errors);
  };
  return (
    <div className="h-[800px] flex justify-center items-center">
      <div className="w-96 p-7 shadow-2xl bg-base-100 rounded-lg">
        <h2 className="text-3xl text-center font-bold">Sign Up</h2>

        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Name is Required",
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="User name"
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>
          <select
            className="select select-bordered w-full max-w-xs mt-4"
            {...register("category", { required: true })}
          >
            <option value="user">User</option>
            <option value="seller">Seller</option>
          </select>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              {...register("email", { required: "Email Address is required" })}
              className="input input-bordered w-full max-w-xs"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email?.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 character or longer.",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])/,
                  message:
                    "Password must have uppercase number and spacial characters.",
                },
              })}
              className="input input-bordered w-full max-w-xs"
              placeholder="******"
            />

            {errors.password && (
              <p className="text-red-500">{errors.password?.message}</p>
            )}
          </div>
          <input
            className="btn btn-accent w-full mt-6"
            value="Sign In"
            type="submit"
          />
        </form>
        <p className="flex justify-center mt-2 gap-2">
          Already have an account?{" "}
          <Link className="text-secondary hover:text-primary" to="/signin">
            Please login
          </Link>
        </p>
        <div className="divider">OR</div>
        <button className="btn btn-outline w-full btn-primary text-black font-bold">
          <FcGoogle className="w-6 h-6 mr-1" />
          <span>Login with Google</span>
        </button>
      </div>
    </div>
  );
};

export default SignUp;
