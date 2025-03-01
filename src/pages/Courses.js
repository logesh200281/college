import React from 'react';

const courses = [
  {
    code: 'TAM101',
    name: 'B.A Tamil Literature',
    department: 'Tamil',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 45000,
      hostel: 18000,
      library: 4000,
      total: 67000,
    },
  },
  {
    code: 'ENG101',
    name: 'B.A English Literature',
    department: 'English',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 40000,
      hostel: 15000,
      library: 3500,
      total: 58500,
    },
  },
  {
    code: 'SAN101',
    name: 'Sanskrit Language and Literature',
    department: 'Sanskrit',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 42000,
      hostel: 16000,
      library: 3700,
      total: 62600,
    },
  },
  {
    code: 'MAT101',
    name: 'B.Sc Mathematics',
    department: 'Mathematics',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 50000,
      hostel: 20000,
      library: 4500,
      total: 74500,
    },
  },
  {
    code: 'BA101',
    name: 'Bachular Business Administration',
    department: 'Business Administration',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 55000,
      hostel: 22000,
      library: 5000,
      total: 82000,
    },
  },
  {
    code: 'CS101',
    name: 'B.Sc Computer Science',
    department: 'Computer Science',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 60000,
      hostel: 25000,
      library: 6000,
      total: 89000,
    },
  },
  {
    code: 'CA101',
    name: 'BCA',
    department: 'Computer Applications',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 55000,
      hostel: 23000,
      library: 5000,
      total: 83000,
    },
  },
  {
    code: 'PHY101',
    name: 'B.Sc Physics',
    department: 'Physics',
    program: 'UG',
    duration: '4 Years',
    fees: {
      tuition: 65000,
      hostel: 27000,
      library: 7000,
      total: 99000,
    },
  },
  {
    code: 'BT101',
    name: 'B.Sc Biotechnology',
    department: 'Bio-Tech',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 70000,
      hostel: 28000,
      library: 7500,
      total: 105500,
    },
  },
  {
    code: 'BC101',
    name: 'B.Sc Bio-Chemistry',
    department: 'Bio-Chemistry',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 60000,
      hostel: 25000,
      library: 6500,
      total: 91500,
    },
  },
  {
    code: 'MB101',
    name: 'B.Sc Microbiology',
    department: 'Micro Biology',
    program: 'UG',
    duration: '3 Years',
    fees: {
      tuition: 62000,
      hostel: 26000,
      library: 6800,
      total: 95800,
    },
  },
  {
    code: 'CS201',
    name: 'M.Sc Computer Science',
    department: 'Computer Science',
    program: 'PG',
    duration: '2 Years',
    fees: {
      tuition: 75000,
      hostel: 30000,
      library: 8000,
      total: 113000,
    },
  },
  {
    code: 'BA201',
    name: 'Mastrate Business Administration (MBA)',
    department: 'Business Administration',
    program: 'PG',
    duration: '2 Years',
    fees: {
      tuition: 80000,
      hostel: 32000,
      library: 8500,
      total: 121500,
    },
  },
  {
    code: 'PHY201',
    name: 'M.Sc Physics',
    department: 'Physics',
    program: 'PG',
    duration: '2 Years',
    fees: {
      tuition: 70000,
      hostel: 30000,
      library: 7500,
      total: 107500,
    },
  },
  {
    code: 'BT201',
    name: 'M.Sc Biotechnology',
    department: 'Bio-Tech',
    program: 'PG',
    duration: '2 Years',
    fees: {
      tuition: 80000,
      hostel: 32000,
      library: 8500,
      total: 121500,
    },
  },
  {
    code: 'CS301',
    name: 'Ph.D. in Computer Science',
    department: 'Computer Science',
    program: 'Ph.D.',
    duration: '3 Years',
    fees: {
      tuition: 90000,
      hostel: 35000,
      library: 10000,
      total: 135000,
    },
  },
  {
    code: 'BA301',
    name: 'Ph.D. in Business Administration',
    department: 'Business Administration',
    program: 'Ph.D.',
    duration: '3 Years',
    fees: {
      tuition: 95000,
      hostel: 36000,
      library: 10500,
      total: 146500,
    },
  },
];

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e8eaf6] to-[#f3e5f5] py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-[#5e35b1] tracking-wide">
          Sri Sankara Arts and Science College Course Details
        </h1>
        <div className="space-y-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white shadow-xl rounded-xl p-8 transition-all transform hover:scale-105 hover:shadow-2xl hover:bg-[#f3f0ff] ease-in-out duration-300"
            >
              <h2 className="text-2xl font-semibold text-[#5e35b1] mb-4">
                {course.name} ({course.code})
              </h2>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-[#5e35b1]">Department:</span> {course.department}
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold text-[#5e35b1]">Program:</span> {course.program}
              </p>
              <p className="text-gray-700 mb-4">
                <span className="font-semibold text-[#5e35b1]">Duration:</span> {course.duration}
              </p>

              <div className="mt-4 border-t-2 border-[#f3e5f5] pt-4">
                <h3 className="text-xl font-semibold text-[#5e35b1] mb-4">Fee Structure</h3>
                <div className="space-y-3">
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#5e35b1]">Tuition Fees:</span> ₹{course.fees.tuition}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#5e35b1]">Hostel Fees:</span> ₹{course.fees.hostel}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold text-[#5e35b1]">Library Fees:</span> ₹{course.fees.library}
                  </p>
                  <p className="text-gray-700 font-bold text-lg">
                    <span className="font-semibold text-[#5e35b1]">Total Fees:</span> ₹{course.fees.total}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
