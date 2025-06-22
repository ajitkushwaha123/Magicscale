import React from "react";
import { Bell, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-white shadow-sm">
      <h1 className="text-xl font-semibold text-gray-800">Welcome Back!</h1>
      <div className="flex items-center gap-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-full px-4 py-1 text-sm pl-8"
          />
          <Search className="absolute top-1.5 left-2 h-4 w-4 text-gray-400" />
        </div>
        <Bell className="h-5 w-5 text-gray-600 cursor-pointer" />
        <img
          src="https://i.pravatar.cc/40"
          alt="user"
          className="h-8 w-8 rounded-full"
        />
      </div>
    </div>
  );
};

export default Topbar;
