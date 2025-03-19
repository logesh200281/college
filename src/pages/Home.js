/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import videoBg from "../asset/collegeAD.mp4"; // Ensure correct file path for the video

const Home = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full min-h-screen object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Dark Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16">
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl">
          Sri Sankara Arts and Science College
        </h1>
        <p className="text-lg mb-8 sm:text-xl md:text-2xl">
          Your future starts here.
        </p>

        {/* Admission Button */}
        <Link
          to="/admission"
          className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Admission
        </Link>
      </div>
    </div>
  );
};

export default Home;
