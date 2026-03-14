import api from '../libs/axiosClient';
import type { Product } from '../types/store';

export const productServices = {
    async getProduct(query?: string) {
        const url = query ? `/product?${query}` : '/product';
        const res = await api.get(url);
        return res.data;
    },
    async getProductById(id: string) {
        const res = await api.get(`/product/${id}`);
        return res.data;
    },
    async getRelatedProduct(id: string) {
        const res = await api.get(`/product/${id}/related`);
        return res.data;
    },
    async addProduct(product: Product) {
        const res = await api.post(`/product`, product);
        return res.data;
    }
};
