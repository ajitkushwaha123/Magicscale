// import React from "react";
// import { useNavigate } from "react-router-dom";
// import { FaCertificate } from "react-icons/fa";
// import fssaiImg from "../../assets/fssai.png";
// // import SiteFooter from './CoursePages/FssaiCoursePage/SiteFooter';

// const FssaiPage = () => {
//   const navigate = useNavigate();

//   const handleStartFssai = () => {
//     navigate("/course/fssai-onboarding")
    
//     5;
//   };

//   return (
//     <div className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-green-100">
//       <div className="h-full flex flex-col md:flex-row">

//         {/* ✅ Left: Scrollable Info Section */}
//         <div className="w-full md:w-1/2 overflow-y-auto px-6 py-20 sm:px-10 space-y-8">
//           <div className="space-y-8 text-left pr-4">
//             <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
//               Easy FSSAI License <br />
//               <span className="bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
//                 For Your Food Business
//               </span>
//             </h1>

//             <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
//               Get your mandatory FSSAI license without the paperwork hassle. Our team handles everything from documentation to submission and follow-up, so you can focus on growing your business.
//             </p>

//             <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
//               Whether you're a home kitchen, café, food truck, or cloud kitchen, FSSAI is essential — and we make the process seamless and fully digital.
//             </p>

//             <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
//               We provide personalized support to ensure fast approval, renewal reminders, and modification assistance — all under one roof.
//             </p>

//             <p className="text-sm text-gray-500">
//               Trusted by 500+ food startups and entrepreneurs.
//             </p>

//             <button
//               onClick={handleStartFssai}
//               className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg shadow transition"
//             >
//               Apply for FSSAI License
//             </button>
//           </div>
//         </div>

//         {/* ✅ Right: Sticky Image Section */}
//         <div className="hidden md:flex md:w-1/2 items-center justify-center sticky top-0 h-screen z-10">
//           <img
//             src={fssaiImg}
//             alt="FSSAI License"
//             className="w-full max-w-2xl rounded-3xl shadow-2xl object-contain"
//           />
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FssaiPage;










import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaSun, FaMoon, FaArrowLeft } from "react-icons/fa"; // Added FaArrowLeft
import fssaiImg from "../../assets/fssai.png";

const FssaiPage = () => {
  const navigate = useNavigate();
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Dark Mode Effect: Applies/removes 'dark' class to document elements
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    // Save user preference to localStorage
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  // Load dark mode preference from localStorage on initial render
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(savedDarkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleStartFssai = () => {
    navigate("/course/fssai-onboarding");
  };

  // --- Common Text Content Component ---
  // Extracted to avoid duplication and improve maintainability
  const TextContent = () => (
    <div className="space-y-8 text-left pr-4">
      <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
        Easy FSSAI License <br />
        <span className="bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
          For Your Food Business
        </span>
      </h1>

      <p className={`text-lg sm:text-xl leading-relaxed font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Get your mandatory FSSAI license without the paperwork hassle. Our team handles everything from documentation to submission and follow-up, so you can focus on growing your business.
      </p>

      <p className={`text-lg sm:text-xl leading-relaxed font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        Whether you're a home kitchen, café, food truck, or cloud kitchen, FSSAI is essential — and we make the process seamless and fully digital.
      </p>

      <p className={`text-lg sm:text-xl leading-relaxed font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
        We provide personalized support to ensure fast approval, renewal reminders, and modification assistance — all under one roof.
      </p>

      <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
        Trusted by 500+ food startups and entrepreneurs.
      </p>

      <button
        onClick={handleStartFssai}
        className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg shadow transition"
      >
        Apply for FSSAI License
      </button>
    </div>
  );
  // --- End Text Content Component ---

  return (
    <div className={`min-h-screen relative ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-br from-sky-50 via-white to-green-100'}`}>

      {/* --- Fixed Elements: Back Arrow & Dark Mode Toggle --- */}
      <div className="fixed top-4 left-4 z-50">
        <button
          onClick={() => navigate(-1)}
          className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-800'}`}
          aria-label="Go back"
        >
          <FaArrowLeft className="text-xl" />
        </button>
      </div>
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full shadow-lg ${isDarkMode ? 'bg-gray-700 text-yellow-300' : 'bg-white text-gray-800'}`}
          aria-label="Toggle dark mode"
        >
          {isDarkMode ? <FaSun className="text-xl" /> : <FaMoon className="text-xl" />}
        </button>
      </div>

      {/* --- Main Content Area --- */}
      {/* On desktop, this will be a flex row for the two columns.
          On mobile, it will be a flex column, allowing for the image to be sticky at the top,
          and content to scroll below it.
          `pt-20` is added to clear space for the fixed header buttons. */}
      <div className="flex flex-col md:flex-row pt-20">

        {/* --- Mobile-Only Sticky Image Section --- */}
        {/* This section will only be visible on mobile screens (`md:hidden`).
            It's `sticky top-0` so the image stays at the top while content scrolls underneath.
            A background is added to prevent content from showing through the image. */}
        <div className={`md:hidden sticky top-0 z-20 w-full px-6 py-4 ${isDarkMode ? 'bg-gray-900' : 'bg-white'} shadow-md`}>
            <img
                src={fssaiImg}
                alt="FSSAI License"
                className="w-full max-w-sm sm:max-w-md mx-auto rounded-3xl shadow-2xl object-contain"
            />
        </div>

        {/* --- Left: Scrollable Info Section (Mobile & Desktop) --- */}
        {/* On mobile, this will appear after the sticky image.
            On desktop, it's the left column, takes 1/2 width, and is scrollable. */}
        <div className="w-full md:w-1/2 px-6 py-12 sm:px-10 md:py-20 md:overflow-y-auto space-y-8">
          <TextContent />
        </div>

        {/* --- Right: Sticky Image Section (Desktop Only) --- */}
        {/* This section is `hidden` on mobile but `md:flex` (visible) on medium screens and up.
            It maintains the desktop layout with the image sticky on the right side. */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center sticky top-0 h-screen z-10 p-6 md:p-0">
          <img
            src={fssaiImg}
            alt="FSSAI License"
            className="w-full max-w-2xl rounded-3xl shadow-2xl object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FssaiPage;


