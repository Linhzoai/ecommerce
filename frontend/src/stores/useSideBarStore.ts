import { create } from 'zustand';
import type { SideBarStore } from '@/types/store';
export const useSideBarStore = create<SideBarStore>((set,get) => ({
    isOpen: false,
    type: '',
    listCompare: [],
    toggleSideBar: () => set((state) => ({ isOpen: !state.isOpen })),
    detailProduct: null,
    handleOpenSideBar: (type, product=null) => {
        const isAlreadyOpen = get().isOpen;
        set(() => ({ type, detailProduct: product }));
        if (!isAlreadyOpen) {
            get().toggleSideBar();
        }
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
