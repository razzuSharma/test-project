import { create } from 'zustand';

const useUserStore = create((set) => ({
  users: [],
  loading: false,
  error: null,
  searchQuery: '',
  statusFilter: 'all',
  roleFilter: 'all',

  setUsers: (users) => set({ users }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setStatusFilter: (status) => set({ statusFilter: status }),
  setRoleFilter: (role) => set({ roleFilter: role }),
}));

export default useUserStore;
