import React, { useEffect, useMemo, useState } from "react";
import useUserStore from "../store/useUserStore";
import Loader from "../components/Loader";
import UserTable from "../components/UserTable";
import EditUserModal from "../components/EditUser";
import ViewUserModal from "../components/ViewUserModel";

const UserPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const {
    users,
    setUsers,
    loading,
    setLoading,
    error,
    setError,
    searchQuery,
    setSearchQuery,
    statusFilter,
    setStatusFilter,
    roleFilter,
    setRoleFilter,
  } = useUserStore();

  const uniqueRoles = useMemo(() => {
    return [...new Set(users?.map((user) => user.role))];
  }, [users]);

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || user.status === statusFilter;

      const matchesRole = roleFilter === "all" || user.role === roleFilter;

      return matchesSearch && matchesStatus && matchesRole;
    });
  }, [users, searchQuery, statusFilter, roleFilter]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch("/users.json");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error("Failed to load users:", err);
        setError("Something went wrong!");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [setUsers, setLoading, setError]);

  const handleEdit = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (userId) => {
    const updatedUsers = users.filter((u) => u.id !== userId);
    setUsers(updatedUsers);
  };

  const handleSave = (updatedUser) => {
    const updatedUsers = users.map((user) =>
      user.id === updatedUser.id ? updatedUser : user
    );
    setUsers(updatedUsers);
  };

  const clearHistory = () => {
    setSearchQuery("");
    setStatusFilter("all");
    setRoleFilter("all");
  };

  const handleView = (user) => {
    setSelectedUser(user);
    setIsViewModalOpen(true);
  };

  if (loading) return <Loader />;
  if (error) return <p className="text-red-500 text-center mt-4">{error}</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold mb-4 text-gray-700">User List</h1>

      {/* Filter Controls */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Statuses</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
            className="border border-gray-300 text-gray-700 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="all">All Roles</option>
            {uniqueRoles.map((role) => (
              <option key={role} value={role}>
                {role?.[0].toUpperCase() + role?.slice(1)}
              </option>
            ))}
          </select>

          <button
            type="button"
            onClick={clearHistory}
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-md px-4 py-2 transition duration-150"
          >
            Clear
          </button>
        </div>
      </div>

      {/* User Table */}
      <UserTable
        users={filteredUsers}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onView={handleView}
      />

      {/* Modals */}
      <EditUserModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        user={selectedUser}
        onSave={handleSave}
      />
      <ViewUserModal
        isOpen={isViewModalOpen}
        onClose={() => setIsViewModalOpen(false)}
        user={selectedUser}
      />
    </div>
  );
};

export default UserPage;
