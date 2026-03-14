import { create } from 'zustand';
import type { ProductStore } from '@/types/store';
import { productServices } from '@/services/productServer';
export const productStore = create<ProductStore>((set, get) => ({
    isLoading: false,
    isShowGrid: true,
    sortId: 0,
    showId: 8,
    products: [],
    page: 0,
    total: 0,
    isLoadingMore: false,
    relatedProduct: [],
    sortOption: [
        { label: 'Default sorting', value: '0' },
        { label: 'Sort by popularity', value: '1' },
        { label: 'Sort by average rating', value: '2' },
        { label: 'Sort by latest', value: '3' },
        { label: 'Sort by price: low to high', value: '4' },
        { label: 'Sort by price: high to low', value: '5' }
    ],
    showOption: [
        { label: '8', value: '8' },
        { label: '12', value: '12' },
        { label: 'All', value: '99999999999' }
    ],
    setSortId: (id) => {
        set({ sortId: id });
    },
    setShowId: (id) => {
        set({ showId: id });
    },
    setIsShowGrid: (isGrid) => {
        set({ isShowGrid: isGrid });
    },
    getProduct: async (query) => {
        try {
            set({ isLoading: true });
            const response = await productServices.getProduct(query);
            set({ products: response.products, total: response.total, page: response.page });
        } catch (error) {
            console.log(error);
        } finally {
            set({ isLoading: false });
        }
    },
    setProducts: (products) => {
        set({ products });
    },
    loadMoreProducts: async (query) => {
        try {
            set({ isLoadingMore: true });
            const response = await productServices.getProduct(query);
            set({
                products: [...get().products, ...response.products],
                page: response.page,
                total: response.total
            });
        } catch (error) {
            console.log(error);
        } finally {
            set({ isLoadingMore: false });
        }
    },
    getProductById: async (id) => {
        try {
            set({ isLoading: true });
            const response = await productServices.getProductById(id);
            return response.product;
        } catch (error) {
            console.log(error);
            return null;
        } finally {
            set({ isLoading: false });
        }
    },
    getRelatedProduct: async (id) => {
        try {
            set({ isLoading: true });
            const response = await productServices.getRelatedProduct(id);
            set({ relatedProduct: response.relatedProducts });
        } catch (error) {
            console.log(error);
        } finally {
            set({ isLoading: false });
        }
    }

}));
