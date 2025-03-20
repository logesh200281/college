/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useParams } from "react-router-dom";

// Dummy data for departments (replace with API or database later)
const departmentData = {
  bba: {
    name: "Bachelor of Business Administration (BBA)",
    description: "The BBA department focuses on business and management education, equipping students with essential skills for entrepreneurship, corporate roles, and leadership.",
    image: "/src/assets/bba.jpg",
    faculty: ["Dr. Rajesh Sharma", "Prof. Ananya Gupta", "Prof. Ramesh Verma"],
  },
  mba: {
    name: "Master of Business Administration (MBA)",
    description: "The MBA department offers advanced business education with specializations in finance, marketing, human resources, and international business.",
    image: "/src/assets/mba.jpg",
    faculty: ["Dr. Priya Menon", "Prof. Karthik Rao", "Prof. Neha Iyer"],
  },
  commerce: {
    name: "Department of Commerce",
    description: "The Commerce department provides in-depth knowledge of trade, finance, and economics, preparing students for the corporate world.",
    image: "/src/assets/commerce.jpg",
    faculty: ["Dr. Suresh Kumar", "Prof. Meera Nair", "Prof. Dinesh Patel"],
  },
};

const DepartmentDetails = () => {
  const { departmentName } = useParams();
  const department = departmentData[departmentName.toLowerCase()] || null;

  if (!department) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <h2 className="text-3xl font-semibold text-red-600">
          Department Not Found
        </h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto">
        {/* Header Section */}
        <div className="bg-blue-900 text-white text-center py-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold">{department.name}</h1>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {/* Left Section - Image */}
          <div className="md:col-span-1">
            <img
              src={department.image}
              alt={`${department.name} Image`}
              className="w-full rounded-lg shadow-md"
            />
          </div>

          {/* Right Section - Description & Faculty */}
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900">About the Department</h2>
            <p className="mt-4 text-gray-700">{department.description}</p>

            {/* Faculty Members */}
            <div className="mt-6">
              <h3 className="text-xl font-semibold text-gray-900">Faculty Members</h3>
              <ul className="mt-2 space-y-2">
                {department.faculty.map((faculty, index) => (
                  <li key={index} className="text-gray-700 border-b pb-2">
                    {faculty}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepartmentDetails;
