import { FaCertificate } from "react-icons/fa";
import { Link } from "react-router-dom";
import fssaiImg from "../../assets/fssai.png";

const FssaiDetails = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-sky-200 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-xl p-8">
        <div className="flex items-center gap-4 mb-6">
          <FaCertificate size={30} className="text-green-600" />
          <h1 className="text-3xl font-bold text-gray-800">FSSAI License Assistance</h1>
        </div>
        <img src={fssaiImg} alt="FSSAI" className="w-full h-64 object-contain mb-6" />
        <p className="text-gray-700 text-lg leading-relaxed">
          We assist you in obtaining the mandatory FSSAI license, ensuring full legal compliance for your food business.
        </p>
        <ul className="list-disc mt-6 ml-6 text-gray-600 space-y-2">
          <li>Expert guidance on required documents</li>
          <li>Fast-track online application</li>
          <li>Regular updates on license status</li>
          <li>Support for renewal and modifications</li>
        </ul>
        <Link
          to="/"
          className="inline-block mt-8 px-5 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
        >
          ⬅ Back to Services
        </Link>
      </div>
    </div>
  );
};

export default FssaiDetails;
