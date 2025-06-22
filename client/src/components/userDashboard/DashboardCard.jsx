import React from "react";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white p-4 rounded-2xl shadow-md flex items-center gap-4 w-full">
      <div className="bg-red-100 text-red-600 p-2 rounded-full">{icon}</div>
      <div>
        <p className="text-sm text-gray-500">{title}</p>
        <h3 className="text-xl font-semibold">{value}</h3>
      </div>
    </div>
  );
};

export default DashboardCard;
