import { FaUtensils, FaMotorcycle, FaCertificate, FaStore } from "react-icons/fa";
import { Link } from "react-router-dom";
import zomatoImg from "../assets/zomato.png";
import swiggyImg from "../assets/swiggy.png";
import fssaiImg from "../assets/fssai.png";
import brandingImg from "../assets/branding.png";

const services = [
  { title: "Zomato Setup", icon: <FaUtensils size={24} />, image: zomatoImg, description: "We help you list and optimize your restaurant on Zomato." },
  { title: "Swiggy Setup", icon: <FaMotorcycle size={24} />, image: swiggyImg, description: "Full onboarding and boost for your Swiggy business." },
  { title: "FSSAI License", icon: <FaCertificate size={24} />, image: fssaiImg, description: "We get your FSSAI license approved quickly." },
  { title: "Branding & Logo", icon: <FaStore size={24} />, image: brandingImg, description: "Complete logo and design support for your outlet." },
];

const HomeServices = () => {
  return (
    <div className="relative py-20 px-4 sm:px-8 md:px-16 overflow-hidden"
         style={{
           background: "radial-gradient(circle at 20% 20%, rgba(195,75,236,0.2), transparent 60%), "
                     + "radial-gradient(circle at 80% 80%, rgba(236,72,153,0.2), transparent 60%), "
                     + "radial-gradient(circle at 50% 40%, rgba(14,165,233,0.2), transparent 60%)"
         }}
      >

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-purple-800">
          Get to <span className="text-pink-600">Know</span> Our Services
        </h2>
        <p className="mt-4 text-lg text-gray-700 max-w-xl mx-auto">
          Everything you need to launch and grow your food business — from online platforms to government licensing.
        </p>
      </div>

      {/* Two Cards Close Together */}
      <div className="flex flex-col md:flex-row md:space-x-4 gap-y-10 mb-10">
        {services.slice(0, 2).map((service, idx) => (
          <div key={idx}
               className="relative flex-1 h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-purple-700/30 group hover:shadow-purple-600/30 transition duration-500 bg-[#1e1b2e]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-contain transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md backdrop-blur-sm">
              {service.title}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/30 backdrop-blur-sm text-white p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-pink-400">{service.icon}</span>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Single Wide Card */}
      <div className="mb-12">
        {services.slice(2, 3).map((service, idx) => (
          <div key={idx}
               className="relative h-[460px] w-full rounded-3xl overflow-hidden shadow-2xl border border-purple-700/30 group hover:shadow-purple-600/30 transition duration-500 bg-[#1e1b2e]">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-contain transition duration-500"
            />
            <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 px-4 py-2 rounded-full text-white font-semibold text-sm shadow-md backdrop-blur-sm">
              {service.title}
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-black/30 backdrop-blur-sm text-white p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-pink-400">{service.icon}</span>
                <h3 className="text-xl font-semibold">{service.title}</h3>
              </div>
              <p className="text-sm">{service.description}</p>
            </div>
          </div>
        ))}
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
