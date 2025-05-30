import React from "react";
import { Link } from "react-router-dom";

const DashboardPage = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white p-6 shrink-0">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <nav className="space-y-4">
      <Link to="/" className="block hover:text-blue-300">
          Home
        </Link>
        <Link to="/users" className="block hover:text-blue-300">
          Users
        </Link>
      </nav>
    </aside>
  );
};

export default DashboardPage;
