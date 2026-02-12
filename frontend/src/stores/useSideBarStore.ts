import { create } from 'zustand';
import type { SideBarStore } from '@/types/store';
export const useSideBarStore = create<SideBarStore>((set,get) => ({
    isOpen: false,
    type: '',
    listCompare: [],
    toggleSideBar: () => set((state) => ({ isOpen: !state.isOpen })),
    handleOpenSideBar: (type: string) => {
        set(() => ({ type }))
        get().toggleSideBar();
    },
    addListCompare: (product) => {
        set((state) => ({ listCompare: [...state.listCompare, product] }))
    },
    removeListCompare: (productId) =>{
        set((state) => ({
            listCompare: state.listCompare.filter((item)=> item.id !== productId),
        }))
    }

}));
