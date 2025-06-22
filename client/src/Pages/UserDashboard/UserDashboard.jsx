import React, { useState } from "react";
import Sidebar from "../../components/userDashboard/Sidebar";
import Topbar from "../../components/userDashboard/Topbar";
import DashboardCard from "../../components/userDashboard/DashboardCard";
import { ShoppingCart, Star, Clock, Menu } from "lucide-react";

const UserDashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <div className="flex h-screen overflow-hidden">
      {/* ✅ Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 transition-transform transform bg-white shadow-lg md:static md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar closeSidebar={closeSidebar} />
      </div>

      {/* ✅ Backdrop for Mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-30 z-30 md:hidden"
          onClick={closeSidebar}
        />
      )}

      {/* ✅ Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-auto">
        {/* ✅ Topbar with Menu Button */}
        <div className="flex items-center justify-between md:justify-end px-4 py-3 bg-white shadow-sm">
          <button onClick={toggleSidebar} className="md:hidden text-gray-700">
            <Menu className="h-6 w-6" />
          </button>
          <Topbar />
        </div>

        {/* ✅ Dashboard Grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <DashboardCard
            title="Total Orders"
            value="122"
            icon={<ShoppingCart className="h-5 w-5" />}
          />
          <DashboardCard
            title="Favorite Items"
            value="8"
            icon={<Star className="h-5 w-5" />}
          />
          <DashboardCard
            title="Recent Orders"
            value="3"
            icon={<Clock className="h-5 w-5" />}
          />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
