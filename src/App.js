import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Importing Main Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Department from "./pages/Department";
import Courses from "./pages/Courses";
import Admission from "./pages/Admission";
import ContactUs from "./pages/Contact";
import Apply from "./pages/Apply";
import Academics from "./pages/Academics";
import Activities from "./pages/Activities";
import Gallery from "./pages/Gallery";
import Media from "./pages/Media";
import NIRF from "./pages/NIRF";

// ✅ Corrected Department Imports
import Biochemistry from "./components/Department/Biochemistry";
import Biotechnology from "./components/Department/Biotechnology";
import BusinessAdministration from "./components/Department/Business Administration"; // Fix import
import Commerce from "./components/Department/Commerce";
import ComputerScience from "./components/Department/Computer Science"; // Fix import
import English from "./components/Department/English";
import Mathematics from "./components/Department/Mathematics";
import Microbiology from "./components/Department/Microbiology";
import PhysicalEducation from "./components/Department/Physical Education"; // Fix import
import Physics from "./components/Department/Physics";
import Sanskrit from "./components/Department/Sanskrit";
import Tamil from "./components/Department/Tamil";
import IQAC from "./components/Department/IQAC";
import Library from "./components/Department/Library";
import AdminPanel from "./pages/admin/AdminPanel";

function App() {
  return (
    <HashRouter>
      <Navbar />
      <div className="overflow-y-auto scrollbar-hide">
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/department" element={<Department />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admission" element={<Admission />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/media" element={<Media />} />
          <Route path="/nirf" element={<NIRF />} />
          <Route path="/admin" element={<AdminPanel />} />
          {/* Department Routes - Fixed Paths */}
          <Route path="/department/biochemistry" element={<Biochemistry />} />
          <Route path="/department/biotechnology" element={<Biotechnology />} />
          <Route path="/department/business-administration" element={<BusinessAdministration />} />
          <Route path="/department/commerce" element={<Commerce />} />
          <Route path="/department/computer-science" element={<ComputerScience />} />
          <Route path="/department/english" element={<English />} />
          <Route path="/department/mathematics" element={<Mathematics />} />
          <Route path="/department/microbiology" element={<Microbiology />} />
          <Route path="/department/physical-education" element={<PhysicalEducation />} />
          <Route path="/department/physics" element={<Physics />} />
          <Route path="/department/sanskrit" element={<Sanskrit />} />
          <Route path="/department/tamil" element={<Tamil />} />
          <Route path="/department/iqac" element={<IQAC />} />
          <Route path="/department/library" element={<Library />} />
        </Routes>
      </div>
      <Footer />
    </HashRouter>
  );
}

export default App;
