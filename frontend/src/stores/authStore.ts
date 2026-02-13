import {create} from 'zustand';
import {authService} from '@/services/authService';
import type {AuthStore} from '@/types/store';
import {persist} from 'zustand/middleware';
import { toast } from 'react-toastify';

export const authStore = create<AuthStore>()(
    persist((set,get)=>({
        user: null,
        accessToken: null,
        loading: false,
        callBack: 1,
        clearState: () =>{
            set({accessToken: null, user: null, loading: false});
            localStorage.clear();
            sessionStorage.clear();
        },
        signIn: async (data)=>{
            try {
                localStorage.clear();
                set({loading:true});
                const res = await authService.signIn(data);
                set({accessToken: res.accessToken});
                get().fetchMe();
                toast.success("Đăng nhập thành công");
                return res;
            } catch (error) {
                toast.error("Đăng nhập thất bại");
                throw error;
            }
            finally{
                set({loading:false});
            }
        },
        signUp: async (data)=>{
            try {
                get().clearState();
                set({loading:true});
                await authService.signUp(data);
                toast.success("Đăng ký thành công");
            } catch (error: any) {
                toast.error(error.response.data.message);
                throw error;
            }
            finally{
                set({loading:false});
            }
        },
        signOut: async ()=>{
            try {
                get().clearState();
                set({loading:true});
                await authService.signOut();
                toast.success("Đăng xuất thành công");
            } catch (error) {
                toast.error("Đăng xuất thất bại");
                throw error;
            }
            finally{
                set({loading:false});
            }
        },
        refreshToken: async ()=>{
            try {
                set({loading:true});
                const res = await authService.refreshToken();
                set({accessToken: res.accessToken});
            } catch (error) {
                throw error;
            }
            finally{
                set({loading:false});
            }
        },
        fetchMe: async ()=>{
            try{
                const res = await authService.fetchMe();
                set({user: res.user});

            }
            catch(error: any){
                console.log("lỗi fetch me");
                console.log(error);
                return;
            }
        }
    }), {
        name: 'auth',
        partialize: (state) => ({user: state.user}),
    })
)