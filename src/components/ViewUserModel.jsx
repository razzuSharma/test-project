// components/ViewUserModal.jsx
import React from "react";
import UserProfile from "./UserProfile";

const ViewUserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="fixed inset-0 z-50 bg-opacity-40 backdrop-blur flex items-center justify-center">
      <div className="bg-white rounded-xl shadow-2xl w-[90%] max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-400 hover:text-red-500 text-xl font-bold"
        >
          &times;
        </button>
        <UserProfile user={user} />
      </div>
    </div>
  );
};

export default ViewUserModal;
