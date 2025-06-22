import React from "react";

const DashboardCard = ({ title, count }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow text-center">
      <h3 className="text-gray-500 text-sm uppercase mb-2">{title}</h3>
      <p className="text-2xl font-bold text-red-500">{count}</p>
    </div>
  );
};
