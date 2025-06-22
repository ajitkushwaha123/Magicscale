import React from "react";
import { Home, ShoppingCart, User, LogOut, Menu, X } from "lucide-react";
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
    <div className="w-64 h-full bg-white shadow-lg p-4 flex flex-col">
      {/* Header with icon and brand */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-2">
          <Menu className="text-red-500" size={20} />
          <h2 className="text-2xl font-bold text-red-500">Magic_Scale</h2>
        </div>

        {/* Close Icon on mobile */}
        <button onClick={closeSidebar} className="md:hidden">
          <X className="text-gray-700" size={20} />
        </button>
      </div>

      {/* Menu List */}
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
              onClick={closeSidebar} // Optional: Auto close on selection (mobile UX)
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
