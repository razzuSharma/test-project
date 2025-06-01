import React from "react";
import { Link } from "react-router-dom";
import { Home, Users } from "lucide-react";

const DashboardPage = () => {
  return (
    <aside className="w-full md:w-64 bg-gray-900 text-white p-4 md:p-6 flex md:flex-col flex-row justify-between items-center md:items-start shadow-lg">
      <h2 className="text-xl md:text-2xl font-semibold mb-0 md:mb-6">
        Dashboard
      </h2>

      <nav className="flex md:flex-col flex-row gap-6 md:gap-4 text-sm md:text-base">
        <Link
          to="/"
          className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
        >
          <Home size={18} /> <span className="hidden md:inline">Home</span>
        </Link>
        <Link
          to="/users"
          className="flex items-center gap-2 hover:text-yellow-400 transition-colors"
        >
          <Users size={18} /> <span className="hidden md:inline">Users</span>
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardPage;
