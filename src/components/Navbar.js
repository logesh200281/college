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
    <nav className="bg-blue-800 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Logo and College Details */}
        <div className="flex items-center w-full md:w-auto">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-20 w-auto mr-2" />
            <div className="text-white text-sm md:text-lg font-bold hover:underline">
              Sri Sankara Arts and Science College
              <br />
              Enathur, Kanchipuram - 631 561.
            </div>
          </Link>
        </div>

        {/* Accreditation & Certifications */}
        <div className="flex flex-wrap justify-center md:flex-nowrap md:space-x-4 w-full md:w-auto mt-2 md:mt-0">
          <img src={image13} alt="NAAC" className="h-20 w-auto mx-2" />
          <img src={image14} alt="ISO" className="h-20 w-auto mx-2" />
          <img src={image12} alt="Image 12" className="h-20 w-auto mx-2" />
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden absolute top-4 right-4">
          <button
            onClick={toggleNavbar}
            className="text-white text-2xl"
          >
            {isNavbarOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Navigation Menu */}
      <ul
        className={`font-bold justify-center md:flex md:space-x-6 md:items-center absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-blue-800 md:bg-transparent transition-transform transform md:translate-x-0 duration-300 ease-in-out ${
          isNavbarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        }`}
      >
        {[
          "Home",
          "About",
          "Department",
          "Courses",
          "Admission",
          "Activities",
          "Academics",
          "Media",
          "NIRF",
          "Gallery",
          "Contact",
        ].map((item, index) => (
          <li key={index} className="py-2 md:py-0 text-center">
            <Link
              to={`/${item.replace(/\s+/g, "").toLowerCase()}`}
              className="block py-2 px-4 hover:bg-blue-700 transition duration-300"
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
