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
    <nav className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-4 sticky top-0 z-50 shadow-xl bg-opacity-90 backdrop-blur-md ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center py-2">
        
        {/* Logo and College Name */}
        <div className="flex items-center w-full md:w-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-16 md:h-20 w-auto mr-3 rounded-full shadow-lg" />
            <div className="text-white text-lg md:text-xl font-extrabold tracking-wide hover:underline">
              Sri Sankara Arts & Science College
              <br />
              <span className="text-sm md:text-base font-light">Enathur, Kanchipuram - 631 561</span>
            </div>
          </Link>
        </div>

        {/* Accreditation & Certifications (Responsive) */}
        <div className="flex flex-row md:flex-nowrap justify-center md:space-x-4 w-full md:w-auto mt-2 md:mt-0 gap-3">
          <img src={image13} alt="NAAC" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
          <img src={image14} alt="ISO" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
          <img src={image12} alt="Image 12" className="h-10 md:h-16 w-auto shadow-lg rounded-lg" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute top-4 right-4">
          <button onClick={toggleNavbar} className="text-white text-3xl font-bold">
            {isNavbarOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul
        className={`font-semibold text-lg justify-center md:flex md:space-x-6 md:items-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-gradient-to-r from-blue-900 to-blue-700 md:bg-transparent transition-transform transform md:translate-x-0 duration-300 ease-in-out rounded-b-3xl shadow-md md:shadow-none ${
          isNavbarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {["Home", "About", "Department", "Courses", "Admission", "Activities", "Academics", "Media", "NIRF", "Gallery", "Contact"].map((item, index) => (
          <li key={index} className="py-3 md:py-2 text-center">
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
