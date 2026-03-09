import api from '../libs/axiosClient.ts';

export const cartService = {
    getCart: async () => {
        const res = await api.get('/cart');
        return res.data;
    },
    addToCart: async (data: { productId: string; size: string; quantity: number }) => {
        const res = await api.post('/cart', data);
        return res;
    },
    updateCart: async (data: { productId: string; size: string; quantity: number }) => {
        const res = await api.patch('/cart', data);
        return res;
    },
    deleteCart: async () => {
        const res = await api.delete('/cart');
        return res;
    },
    deleteItemCart: async (data: { productId: string; size: string }) => {
        const res = await api.delete(`/cart/delete`, {data});
        return res;
    }
};
