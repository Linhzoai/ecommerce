import api from '../libs/axiosClient';
import type { Product } from '../types/store';

export const productServices = {
    async getProduct(query?: string) {
        const res = await api.get(`/product?${query}`);
        return res.data;
    },
    async getProductById(id: string) {
        const res = await api.get(`/product/${id}`);
        return res.data;
    },
    async getRelatedProduct(id: string) {
        const res = await api.get(`/product/related/${id}`);
        return res.data;
    },
    async addProduct(product: Product) {
        const res = await api.post(`/product`, product);
        return res.data;
    }
};
