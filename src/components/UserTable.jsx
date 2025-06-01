// components/UserTable.jsx
import React from "react";
import { FaEye } from "react-icons/fa";

const UserTable = ({ users, onEdit, onDelete, onView }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
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
          {users.map((user) => (
            <tr key={user.id} className="border-t">
              <td className="py-2 px-4 flex items-center text-gray-600 gap-2">
                <img
                  src={user.image}
                  alt={user.name}
                  className="w-8 h-8 rounded-full"
                />
                {user.name}
              </td>
              <td className="py-2 px-4 text-gray-600">{user.email}</td>
              <td className="py-2 px-4 capitalize text-gray-600">{user.role}</td>
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
              <td className="py-2 px-4 flex gap-3">
                <button
                  onClick={() => onView(user)}
                  className="text-white bg-red-600 hover:bg-red-700 rounded-lg text-sm px-5 gap-2 py-2"
                >
                  <FaEye />
                </button>
                <button
                  onClick={() => onEdit(user)}
                  className="text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm px-4 py-2 mr-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => onDelete(user.id)}
                  className="text-white bg-red-600 hover:bg-red-700 rounded-lg text-sm px-4 py-2"
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

export default UserTable;
