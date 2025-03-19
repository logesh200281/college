/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/entitylogo.gif";
import image12 from "../asset/12.jpg";
import image13 from "../asset/naac-img.png";
import image14 from "../asset/iso-img.png";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sticky top-0 z-50 shadow-xl bg-opacity-90 backdrop-blur-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        
        {/* Logo and College Name */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto rounded-full shadow-lg" />
            <div className="text-white text-lg md:text-xl font-extrabold tracking-wide hover:underline">
              Sri Sankara Arts & Science College
              <br />
              <span className="text-sm md:text-base font-light">Enathur, Kanchipuram - 631 561</span>
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={toggleNavbar} className="md:hidden text-white text-3xl font-bold">
          {isNavbarOpen ? "✕" : "☰"}
        </button>

        {/* Accreditation & Certifications - Now visible on all screens */}
        <div className="flex items-center space-x-4 mt-3 md:mt-0">
          <img src={image13} alt="NAAC" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
          <img src={image14} alt="ISO" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
          <img src={image12} alt="Image 12" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
        </div>
      </div>

      {/* Navigation Menu */}
      <ul
        className={`flex flex-col md:flex-row md:items-center bg-blue-900 md:bg-transparent md:space-x-6 w-full md:w-auto transition-all duration-300 ease-in-out transform ${
          isNavbarOpen ? "block" : "hidden md:flex"
        }`}
      >
        {["Home", "About", "Department", "Courses", "Admission", "Activities", "Academics", "Media", "NIRF", "Gallery", "Contact"].map((item, index) => (
          <li key={index} className="py-2 text-center md:py-0">
            <Link
              to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
              className="block py-3 px-5 rounded-lg transition duration-300 hover:bg-blue-800 md:hover:bg-white md:hover:text-blue-900 shadow-md md:shadow-none"
              onClick={() => setIsNavbarOpen(false)}
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
