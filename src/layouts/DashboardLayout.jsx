import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-100">
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-gray-900 text-white transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:relative md:translate-x-0`}
      >
        <div className="p-4 h-full flex flex-col">
          <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
          <nav className="space-y-2">
            <Link
              to="/"
              className="block py-2 px-3 rounded hover:bg-gray-800 transition"
            >
              Home
            </Link>
            <Link
              to="/users"
              className="block py-2 px-3 rounded hover:bg-gray-800 transition"
            >
              Users
            </Link>
          </nav>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-auto">
        <div className="md:hidden p-3 bg-gray-900 text-white flex justify-between items-center sticky top-0 z-20">
          <h1 className="text-xl font-bold">Dashboard</h1>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="p-1 rounded-md hover:bg-gray-800"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <main className="flex-1 p-4 sm:p-6">
          <div className="bg-white rounded-lg shadow-sm p-4 sm:p-6 h-full">
            {children || <div> No content</div>}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
