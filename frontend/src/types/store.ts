
export interface Size {
    name: string;
    amount: number;
}

export interface User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    images: string[];
    size: Size[];
    material: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface SideBarStore {
    isOpen: boolean;
    type: string;
    listCompare: Product[];
    toggleSideBar: () => void;
    handleOpenSideBar: (type: string) => void;
    addListCompare: (product: Product) => void;
    removeListCompare: (productId: string) =>void
}
