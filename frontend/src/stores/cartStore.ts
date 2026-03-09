import {create} from 'zustand';
import type {CartStore} from '@/types/store.ts';
import { cartService } from '@/services/cartService.ts';

export const cartStore = create<CartStore>((set,get)=>({
    isLoading: false,
    carts: [],
    productIdDelete: "",
    getCart: async () =>{
        try{
            set({isLoading: true});
            const res = await cartService.getCart();
            set({carts: res.product});
        }
        catch(err){
            console.log(err);
            return;
        }
        finally{
            set({isLoading: false});
        }
    },
    addToCart: async (data) =>{
        try{
            set({isLoading: true});
            await cartService.addToCart(data);
            await get().getCart();
        }
        catch(err){
            console.log(err);
            return;
        }
        finally{
            set({isLoading: false});
        }
    },
    updateCart: async (data) =>{
        try{
            set({isLoading: true});
            await cartService.updateCart(data);
            await get().getCart();
        }
        catch(err){
            console.log(err);
            return;
        }
        finally{
            set({isLoading: false});
        }
    },
    deleteCart: async () =>{
        try{
            set({isLoading: true});
            await cartService.deleteCart();
            await get().getCart();
        }
        catch(err){
            console.log(err);
            return;
        }
        finally{
            set({isLoading: false});
        }
    },
    deleteItemCart: async (data) =>{
        try{
            set({isLoading: true, productIdDelete: data.productId});
            await cartService.deleteItemCart(data);
            await get().getCart();
        }
        catch(err){
            console.log(err);
            return;
        }
        finally{
            set({isLoading: false, productIdDelete: ""});
        }
    }
}))