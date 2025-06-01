import React from "react";

const UserProfile = ({ user }) => {
  if (!user) {
    return <p className="text-center text-gray-500 mt-10">No user selected.</p>;
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-xl rounded-2xl overflow-hidden mt-10 border border-gray-100">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-6 flex items-center space-x-4 text-white">
        <img
          src={user.image || "https://via.placeholder.com/80"}
          alt={`${user.name}'s avatar`}
          className="w-20 h-20 rounded-full border-4 border-white object-cover shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold">{user.name}</h2>
          <p className="text-sm opacity-90">{user.email}</p>
        </div>
      </div>

      {/* Body Section */}
      <div className="px-6 py-5">
        <div className="flex justify-between mb-4">
          <span className="bg-gray-100 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">
            Role: {user.role}
          </span>
          <span
            className={`px-3 py-1 text-sm rounded-full font-medium ${
              user.status === "active"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
          </span>
        </div>

        <hr className="mb-4" />

        <h3 className="text-lg font-semibold text-gray-800 mb-2">About</h3>
        <p className="text-gray-600 text-sm leading-relaxed">
          {user.about || "No additional information available."}
        </p>
      </div>
    </div>
  );
};

export default UserProfile;
