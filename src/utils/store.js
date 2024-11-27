import { create } from 'zustand';

export const useOpenModal = create((set) => ({
  isOpenMemberAddModal: false,
  OpenMemberAddModal: () => set(() => ({ isOpenMemberAddModal: true })),
  CloseMemberAddModal: () => set(() => ({ isOpenMemberAddModal: false })),
  ToggleMemberAddModal: () =>
    set((state) => ({ isOpenMemberAddModal: !state.isOpenMemberAddModal })),
  removeAllBears: () => set({ bears: 0 }),
}));
