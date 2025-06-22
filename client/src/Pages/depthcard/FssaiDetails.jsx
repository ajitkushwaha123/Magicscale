import React from "react";
import { useNavigate } from "react-router-dom";
import { FaCertificate } from "react-icons/fa";
import fssaiImg from "../../assets/fssai.png";
// import SiteFooter from './CoursePages/FssaiCoursePage/SiteFooter';

const FssaiPage = () => {
  const navigate = useNavigate();

  const handleStartFssai = () => {
    navigate("/course/fssai-onboarding")
    
    5;
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-green-100">
      <div className="h-full flex flex-col md:flex-row">

        {/* ✅ Left: Scrollable Info Section */}
        <div className="w-full md:w-1/2 overflow-y-auto px-6 py-20 sm:px-10 space-y-8">
          <div className="space-y-8 text-left pr-4">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Easy FSSAI License <br />
              <span className="bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                For Your Food Business
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
              Get your mandatory FSSAI license without the paperwork hassle. Our team handles everything from documentation to submission and follow-up, so you can focus on growing your business.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
              Whether you're a home kitchen, café, food truck, or cloud kitchen, FSSAI is essential — and we make the process seamless and fully digital.
            </p>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
              We provide personalized support to ensure fast approval, renewal reminders, and modification assistance — all under one roof.
            </p>

            <p className="text-sm text-gray-500">
              Trusted by 500+ food startups and entrepreneurs.
            </p>

            <button
              onClick={handleStartFssai}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg text-lg shadow transition"
            >
              Apply for FSSAI License
            </button>
          </div>
        </div>

        {/* ✅ Right: Sticky Image Section */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center sticky top-0 h-screen z-10">
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
