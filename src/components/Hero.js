/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Hero = () => {
  return (
    <div className="bg-blue-500 text-white py-20">
      <div className="container mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Our College</h1>
        <p className="text-lg mb-8">Your future starts here.</p>
        <a href="#" className="bg-white text-blue-500 px-6 py-2 rounded-full font-semibold hover:bg-gray-200">Learn More</a>
      </div>
    </div>
  );
};

export default Hero;