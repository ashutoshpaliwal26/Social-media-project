import React, { useState } from "react";
import axios from "axios";

const SignUp = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    username: "",
    password: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handelSubmit = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "https://e49d6eb1-77a3-4dea-8525-77b17ee5a4c9-00-2p11pdap7zn5y.worf.replit.dev:8080/signup",
        userData,
      );
      console.log(responce.data);
      setUserData({
        name: "",
        phone: "",
        username: "",
        password: "",
        email: "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-fit">
      <div className="">
        <img
          className="p-12"
          src="https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580773/instagram/pduebicdzqr9hmwdiot5.png"
        />
      </div>
      <div className="w-full">
        <form
          className="flex flex-col items-center justify-center w-full"
          onSubmit={handelSubmit}
          method="POST"
        >
          <input
            className="border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2"
            name="name"
            value={userData.name}
            type="text"
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            className="border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2"
            value={userData.email}
            name="email"
            type="text"
            onChange={handleChange}
            placeholder="Email"
          />
          <input
            className="border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2"
            name="phone"
            value={userData.phone}
            type="number"
            onChange={handleChange}
            placeholder="Phone No"
          />
          <input
            className="border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2"
            value={userData.username}
            name="username"
            type="username"
            onChange={handleChange}
            placeholder="Username"
          />
          <input
            className="border border-gray-300 rounded-sm pl-3 w-3/4 text-xs h-10 mt-2"
            value={userData.password}
            name="password"
            type="text"
            onChange={handleChange}
            placeholder="Password"
          />
          <button
            className="border border-gray-300 rounded-md pl-3 w-3/4 text-xs h-10 mt-3 bg-blue-600 hover:to-blue-700 text-white font-bold"
            type="submit"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="mt-4">
        <img src="https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580773/instagram/gnuhpklpmtefpleukene.png" />
      </div>
      <div className="mt-8">
        <img src="https://res.cloudinary.com/djfi9rtlx/image/upload/v1716580774/instagram/v1brbru1r7jtiijenkz9.png" />
      </div>
      <div className="mt-10 text-blue-950">
        <a href="/login">Already Have an Account</a>
      </div>
    </div>
  );
};

export default SignUp;
