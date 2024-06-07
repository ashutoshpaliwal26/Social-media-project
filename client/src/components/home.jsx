import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <>
      <div className="mt-10">
        <Link
          to="/login"
          className="p-4 m-2 border border-gray-400 rounded-full hover:bg-gray-400 hover:text-black text-white bg-gray-800"
        >
          Login
        </Link>
        <Link
          className="p-4 m-2 border border-gray-400 rounded-full hover:bg-gray-400 hover:text-black text-white bg-gray-800"
          to="/signup"
        >
          Sign Up
        </Link>
        <Link
          className="p-4 m-2 border border-gray-400 rounded-full hover:bg-gray-400 hover:text-black text-white bg-gray-800"
          to="/profile"
        >
          Profile
        </Link>
      </div>
    </>
  );
}

export default Home;