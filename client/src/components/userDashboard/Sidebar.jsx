// ✅ Updated Sidebar with Responsive Icon and Branding
import React from "react";
import { Home, ShoppingCart, User, LogOut } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = ({ closeSidebar }) => {
  const menuItems = [
    { label: "Home", icon: <Home size={20} />, path: "/" },
    { label: "Orders", icon: <ShoppingCart size={20} />, path: "/orders" },
    { label: "Profile", icon: <User size={20} />, path: "/profile" },
    { label: "Subscriptions", icon: <ShoppingCart size={20} />, path: "/subscriptions" },
    { label: "Logout", icon: <LogOut size={20} />, path: "/logout" },
  ];

  return (
    <div className="w-64 h-full bg-white shadow-lg p-4">
      <div className="flex items-center gap-2 mb-8">
        <img
          src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
          alt="Logo Icon"
          className="h-6 w-6"
        />
        <h2 className="text-2xl font-bold text-red-500">Magic_Scale</h2>
      </div>
      <ul className="space-y-4">
        {menuItems.map((item) => (
          <li key={item.label}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 p-2 rounded-lg ${
                  isActive ? "bg-red-100 text-red-500 font-semibold" : "text-gray-700"
                } hover:bg-red-50`
              }
              onClick={closeSidebar}
            >
              {item.icon}
              <span>{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;



// import React, { useState } from "react";
// import Sidebar from "../../components/userDashboard/Sidebar";
// import Topbar from "../../components/userDashboard/Topbar";
// import DashboardCard from "../../components/userDashboard/DashboardCard";
// import { ShoppingCart, Star, Clock, Menu } from "lucide-react";

// const UserDashboard = () => {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   const toggleSidebar = () => setSidebarOpen(!sidebarOpen);
//   const closeSidebar = () => setSidebarOpen(false);

//   return (
//     <div className="flex h-screen overflow-hidden">
//       {/* ✅ Animated Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-40 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out md:static md:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <Sidebar closeSidebar={closeSidebar} />
//       </div>

//       {/* ✅ Backdrop when sidebar is open */}
//       {sidebarOpen && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden transition-opacity duration-300"
//           onClick={closeSidebar}
//         />
//       )}

//       {/* ✅ Main Content Area */}
//       <div className="flex-1 flex flex-col w-full overflow-auto">
//         {/* ✅ Topbar with hamburger icon */}
//         <div className="flex items-center justify-between md:justify-end px-4 py-3 bg-white shadow-sm">
//           <button onClick={toggleSidebar} className="md:hidden text-gray-700">
//             <Menu className="h-6 w-6" />
//           </button>
//           <Topbar />
//         </div>

//         {/* ✅ Dashboard Cards */}
//         <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           <DashboardCard
//             title="Total Orders"
//             value="122"
//             icon={<ShoppingCart className="h-5 w-5" />}
//           />
//           <DashboardCard
//             title="Favorite Items"
//             value="8"
//             icon={<Star className="h-5 w-5" />}
//           />
//           <DashboardCard
//             title="Recent Orders"
//             value="3"
//             icon={<Clock className="h-5 w-5" />}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;
