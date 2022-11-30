import React, { useContext, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import useToken from "../../../hooks/useToken";

const SocialLogin = () => {
  const { googleSignIn } = useContext(AuthContext);
  const location = useLocation();

  const [createdUserEmail, setCreatedUserEmail] = useState("");
  const [token] = useToken(createdUserEmail);
  console.log("token is", token);

  const navigate = useNavigate();

  const form = location.state?.form?.pathname || "/";

  if (token) {
    navigate(form, { replace: true });
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        saveUser(user.displayName, user.email, "buyers");
        console.log(user.displayName, user.email);
      })
      .catch((err) => console.error(err));
  };

  const saveUser = (name, email, category) => {
    const user = { name, email, role: category };
    fetch("https://mobile-garage-server-pi.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setCreatedUserEmail(email);
      });
  };

  return (
    <div>
      <button
        onClick={handleGoogleSignIn}
        className="btn btn-outline w-full btn-primary text-black font-bold"
      >
        <FcGoogle className="w-6 h-6 mr-1" />
        <span>Login with Google</span>
      </button>
    </div>
  );
};

export default SocialLogin;
