import React from "react";

const DashboardHome = () => {
  return (
    <>
      <h1 className="text-gray-500 text-3xl font-bold mb-4">Welcome Back!</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-gray-500 text-xl font-semibold">Users</h2>
          <p className="mt-2 text-gray-600">1,234</p>
        </div>
        <div className="text-gray-500 bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Sales</h2>
          <p className="mt-2 text-gray-600">$56,789</p>
        </div>
        <div className="text-gray-500 bg-white shadow-md p-6 rounded-xl">
          <h2 className="text-xl font-semibold">Visits</h2>
          <p className="mt-2 text-gray-600">9,876</p>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
