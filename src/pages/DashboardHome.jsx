import React from "react";

const DashboardHome = () => {
  return (
    <div className="p-4 sm:p-6">
      <h1 className="text-gray-700 text-2xl sm:text-3xl font-bold mb-6">
        Welcome Back!
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white shadow-lg p-5 rounded-2xl transition hover:shadow-xl">
          <h2 className="text-gray-700 text-lg font-semibold">Users</h2>
          <p className="mt-2 text-gray-500 text-xl font-medium">1,234</p>
        </div>

        <div className="bg-white shadow-lg p-5 rounded-2xl transition hover:shadow-xl">
          <h2 className="text-gray-700 text-lg font-semibold">Sales</h2>
          <p className="mt-2 text-gray-500 text-xl font-medium">$56,789</p>
        </div>

        <div className="bg-white shadow-lg p-5 rounded-2xl transition hover:shadow-xl">
          <h2 className="text-gray-700 text-lg font-semibold">Visits</h2>
          <p className="mt-2 text-gray-500 text-xl font-medium">9,876</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
