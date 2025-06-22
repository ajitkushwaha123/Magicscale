// File: /pages/UserDashboard/Subscriptions.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import { useNavigate } from "react-router-dom";

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);
  const [loading, setLoading] = useState(true);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchSubscriptions = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/user/subscriptions", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setSubscriptions(res.data);
      } catch (err) {
        console.error("Error fetching subscriptions", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubscriptions();
  }, [token]);

  const handleSubscribeClick = () => {
    navigate("/plans"); // ✅ Adjust to your actual subscription/plans route
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-red-500 mb-4">My Subscriptions</h2>

          <div className="bg-white rounded-xl shadow p-4">
            {loading ? (
              <p className="text-gray-500 text-center">Loading...</p>
            ) : subscriptions.length === 0 ? (
              <div className="text-center py-10">
                <p className="text-gray-500 mb-4">You do not have any subscriptions.</p>
                <button
                  onClick={handleSubscribeClick}
                  className="px-6 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                >
                  Subscribe Now
                </button>
              </div>
            ) : (
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="p-2 text-left">Plan</th>
                    <th className="p-2 text-left">Amount</th>
                    <th className="p-2 text-left">Duration</th>
                    <th className="p-2 text-left">Start Date</th>
                    <th className="p-2 text-left">End Date</th>
                    <th className="p-2 text-left">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {subscriptions.map((sub, index) => (
                    <tr key={index} className="border-t">
                      <td className="p-2">{sub.planName}</td>
                      <td className="p-2">₹{sub.amount}</td>
                      <td className="p-2">{sub.duration} months</td>
                      <td className="p-2">{new Date(sub.startDate).toLocaleDateString()}</td>
                      <td className="p-2">{new Date(sub.endDate).toLocaleDateString()}</td>
                      <td className="p-2">{sub.status || "Active"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
