import { FaUtensils, FaMotorcycle, FaCertificate } from "react-icons/fa";
import { Link } from "react-router-dom";
import zomatoImg from "../assets/zomato.png";
import swiggyImg from "../assets/swiggy.png";
import fssaiImg from "../assets/fssai.png";

const services = [
  {
    title: "Zomato Setup",
    icon: <FaUtensils size={24} />,
    image: zomatoImg,
  },
  {
    title: "Swiggy Setup",
    icon: <FaMotorcycle size={24} />,
    image: swiggyImg,
  },
  {
    title: "FSSAI License",
    icon: <FaCertificate size={24} />,
    image: fssaiImg,
    gradient: "from-green-300 to-lime-200", // distinct green
  },
];

const HomeServices = () => {
  return (
    <div className="relative py-20 px-4 sm:px-8 md:px-16 overflow-hidden bg-gradient-to-br from-sky-200 via-white to-sky-100">
      {/* Background Abstract Circles */}
      <div className="absolute w-80 h-80 bg-sky-300 rounded-full opacity-30 top-[-60px] left-[-60px] blur-3xl"></div>
      <div className="absolute w-72 h-72 bg-purple-300 rounded-full opacity-30 bottom-[-60px] right-[-60px] blur-3xl"></div>

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-purple-800">
          Get to <span className="text-pink-600">Know</span> Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Everything you need to launch and grow your food business — from online platforms to government licensing.
        </p>
      </div>

      {/* First Two Cards - Matched to Background */}
      <div className="flex flex-col md:flex-row md:space-x-6 gap-y-10 mb-12">
        {services.slice(0, 2).map((service, idx) => (
          <div
            key={idx}
            className={`relative flex-1 h-[460px] rounded-3xl border border-white/30 shadow-xl 
                      bg-gradient-to-br from-sky-200 via-white to-sky-100 bg-opacity-80 
                      backdrop-blur-sm p-4 hover:scale-105 transition-transform duration-500`}
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-contain rounded-xl"
            />
            <div className="absolute bottom-4 left-4 text-gray-800 text-xl font-bold flex items-center gap-2 drop-shadow-sm">
              <span>{service.icon}</span> {service.title}
            </div>
          </div>
        ))}
      </div>

      {/* FSSAI Card - Unique Green Gradient */}
      <div className="mb-12 flex justify-center">
        <div
          className={`relative h-[420px] w-[90%] md:w-[70%] rounded-3xl shadow-xl border border-white/20 
                      bg-gradient-to-br ${services[2].gradient} bg-opacity-80 backdrop-blur-md p-4 
                      hover:scale-105 transition-transform duration-500`}
        >
          <img
            src={services[2].image}
            alt={services[2].title}
            className="w-full h-full object-contain rounded-xl"
          />
          <div className="absolute bottom-4 left-4 text-white text-xl font-bold flex items-center gap-2 drop-shadow-md">
            <span>{services[2].icon}</span> {services[2].title}
          </div>
        </div>
      </div>

      {/* Show More Button */}
      <div className="text-center mt-6">
        <Link to="/services">
          <button className="px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 shadow-lg transition duration-300">
            Show More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
