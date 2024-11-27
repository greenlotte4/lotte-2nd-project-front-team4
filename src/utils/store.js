import { create } from 'zustand';

export const useOpenModal = create((set) => ({
  isOpenMemberAddModal: false,
  OpenMemberAddModal: () => set(() => ({ isOpenMemberAddModal: true })),
  CloseMemberAddModal: () => set(() => ({ isOpenMemberAddModal: false })),
  ToggleMemberAddModal: () =>
    set((state) => ({ isOpenMemberAddModal: !state.isOpenMemberAddModal })),

  isOpenRoomCreateModal: false,
  OpenRoomCreateModal: () => set(() => ({ isOpenRoomCreateModal: true })),
  CloseRoomCreateModal: () => set(() => ({ isOpenRoomCreateModal: false })),
  ToggleRoomCreateModal: () =>
    set((state) => ({ isOpenRoomCreateModal: !state.isOpenRoomCreateModal })),
}));
