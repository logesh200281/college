import React, { useState } from "react";

const Apply = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.course) {
      alert("Please fill in all required fields.");
      return;
    }
    console.log("Application Submitted", formData);
    alert("Your application has been submitted successfully!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-blue-50 flex items-center justify-center p-6">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg border-t-8 border-blue-700">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-2">Apply for Admission</h2>
        <p className="text-gray-600 text-center mb-6">Fill in the form to apply for your desired course.</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold">Full Name *</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Email *</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Phone *</label>
            <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required />
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Course *</label>
            <select name="course" value={formData.course} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500" required>
              <option value="">Select a Course</option>
              <option value="B.A">B.A</option>
              <option value="B.Sc">B.Sc</option>
              <option value="B.Com">B.Com</option>
              <option value="M.A">M.A</option>
              <option value="M.Sc">M.Sc</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-700 font-semibold">Message (Optional)</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800 transition">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default Apply;