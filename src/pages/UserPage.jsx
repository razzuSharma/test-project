import React, { useEffect, useState } from "react";

const UserPage = () => {
  const [data, setData] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch("/users.json");
      const apiData = await response.json();
      setData(apiData);
    } catch (err) {
      console.error("Failed to load users:", err);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-600">User List</h1>
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="text-gray-600 bg-gray-100 text-left">
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Email</th>
            <th className="py-3 px-4">Role</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4 flex items-center text-gray-600 gap-2">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-8 h-8 rounded-full text-gray-600"
                />
                {user.name}
              </td>
              <td className="py-2 px-4 text-gray-600">{user.email}</td>
              <td className="py-2 px-4 capitalize text-gray-600">
                {user.role}
              </td>
              <td className="py-2 px-4 text-gray-600">
                <span
                  className={`px-2 py-1 text-sm rounded-full ${
                    user.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="py-2 px-4">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                >
                  Edit
                </button>
                <button
                  type="button"
                  className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserPage;
