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
    quantity?: number;
    choiceSize?: string;
    createdAt: Date;
    updatedAt: Date;
    total?: number;
}

export interface SideBarStore {
    isOpen: boolean;
    type: string;
    listCompare: Product[];
    detailProduct: Product | null;
    toggleSideBar: () => void;
    handleOpenSideBar: (type: string, product?: Product | null) => void;
    addListCompare: (product: Product) => void;
    removeListCompare: (productId: string) => void;
}

export interface AuthStore {
    user: User | null;
    accessToken: string | null;
    loading: boolean;
    callBack: number;
    clearState: () => void;
    signIn: (data: { email: string; password: string }) => Promise<void>;
    signUp: (data: { email: string; password: string }) => Promise<void>;
    signOut: () => Promise<void>;
    refreshToken: () => Promise<void>;
    fetchMe: () => Promise<void>;
}

export interface ProductStore {
    isLoading: boolean;
    isLoadingMore: boolean;
    sortId: number;
    showId: number;
    isShowGrid: boolean;
    products: Product[];
    relatedProduct: Product[];
    page: number;
    total: number;
    sortOption: { label: string; value: string }[];
    showOption: { label: string; value: string }[];
    setSortId: (id: number) => void;
    setShowId: (id: number) => void;
    setIsShowGrid: (isShowGrid: boolean) => void;
    getProduct: (query?: string) => Promise<void>;
    setProducts: (products: Product[]) => void;
    loadMoreProducts: (query: string) => Promise<void>;
    getProductById: (id: string) => Promise<Product | null>;
    getRelatedProduct: (id: string) => Promise<void>;
}

export interface CartStore {
    isLoading: boolean;
    carts: Product[];
    productIdDelete: string;
    getCart: () => Promise<void>;
    addToCart: (data: { productId: string; size: string; quantity: number }) => Promise<void>;
    deleteItemCart: (data: { productId: string; size: string }) => Promise<void>;
    deleteCart: () => Promise<void>;
    updateCart: (data: { productId: string; size: string; quantity: number }) => Promise<void>;
}
