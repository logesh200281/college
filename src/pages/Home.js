/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for internal routing
import videoBg from '../asset/collegeAD.mp4'; // Ensure the correct file path for video

const Hero = () => {
  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={videoBg}
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay (Optional: Darken the video for better text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 md:px-16">
        <h1 className="text-4xl font-bold mb-4 sm:text-5xl md:text-6xl">
          Sri Sankara Arts and Science College
        </h1>
        <p className="text-lg mb-8 sm:text-xl md:text-2xl">Your future starts here.</p>
        
        {/* Use React Router's Link for internal navigation */}
        <Link
          to="/admission" // Link to the Admission page (you should have a route for this)
          className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300"
        >
          Admission
        </Link>
      </div>
    </div>
  );
};

export default Hero;
