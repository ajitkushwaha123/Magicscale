import { FaMotorcycle } from "react-icons/fa";
import { Link } from "react-router-dom";
import swiggyImg from "../../assets/swiggy.png";

const SwiggyDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <FaMotorcycle size={30} className="text-orange-500" />
          <h1 className="text-3xl font-bold text-gray-800">Swiggy Setup Service</h1>
        </div>
        <img src={swiggyImg} alt="Swiggy" className="w-full h-64 object-contain mb-6" />
        <p className="text-gray-700 text-lg leading-relaxed">
          We handle everything required to launch your restaurant on Swiggy. From onboarding to optimizing your store for better reach, we ensure your success.
        </p>
        <ul className="list-disc mt-6 ml-6 text-gray-600 space-y-2">
          <li>Complete Swiggy registration</li>
          <li>Store listing and description setup</li>
          <li>Menu digitization and uploading</li>
          <li>Strategy to increase daily orders</li>
        </ul>
        <Link
          to="/"
          className="inline-block mt-8 px-5 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
        >
          ⬅ Back to Services
        </Link>
      </div>
    </div>
  );
};

export default SwiggyDetails;
