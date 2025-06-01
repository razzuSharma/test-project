import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import { ChevronLeft, ChevronRight, Circle, Edit2, Trash2 } from "lucide-react";

const USERS_PER_PAGE = 5;

const UserTable = ({ users, onEdit, onDelete, onView }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(users.length / USERS_PER_PAGE);

  const startIndex = (currentPage - 1) * USERS_PER_PAGE;
  const currentUsers = users.slice(startIndex, startIndex + USERS_PER_PAGE);

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <div>
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
            {currentUsers.map((user) => (
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
                <td className="py-2 px-4 flex gap-3">
                  <button
                    onClick={() => onView(user)}
                    className="text-white bg-red-600 hover:bg-red-700 rounded-lg text-sm px-5 gap-2 py-2"
                  >
                    <FaEye />
                  </button>
                  <button
                    onClick={() => onEdit(user)}
                    className="text-white bg-green-600 hover:bg-green-700 rounded-lg text-sm px-3 py-2 flex items-center justify-center"
                    aria-label="Edit user"
                  >
                    <Edit2 size={18} />
                  </button>

                  <button
                    onClick={() => onDelete(user.id)}
                    className="text-white bg-red-600 hover:bg-red-700 rounded-lg text-sm px-3 py-2 flex items-center justify-center"
                    aria-label="Delete user"
                  >
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-3 mt-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
          className={`p-2 rounded ${
            currentPage === 1
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          <ChevronLeft size={20} />
        </button>

        {/* Page numbers with Circle icon */}
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => goToPage(i + 1)}
            aria-label={`Page ${i + 1}`}
            className={`p-1 rounded ${
              currentPage === i + 1
                ? "text-blue-700"
                : "text-gray-400 hover:text-blue-500"
            }`}
          >
            <Circle
              size={currentPage === i + 1 ? 14 : 10}
              fill={currentPage === i + 1 ? "currentColor" : "none"}
              strokeWidth={2}
            />
          </button>
        ))}

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
          className={`p-2 rounded ${
            currentPage === totalPages
              ? "text-gray-400 cursor-not-allowed"
              : "text-blue-600 hover:text-blue-800"
          }`}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default UserTable;
