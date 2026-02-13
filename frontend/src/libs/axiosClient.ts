import { authService } from '@/services/authService';
import axios from 'axios';
import Cookies from 'js-cookie';

const BaseURL = import.meta.env.MODE === 'development' ? 'http://localhost:8080/api' : import.meta.env.VITE_API_URL;
const api = axios.create({
    baseURL: BaseURL,
    validateStatus: (status) => status >= 200 && status < 300,
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json'
    }
});


api.interceptors.request.use((config)=>{
    const accessToken = Cookies.get('accessToken');
    if(accessToken){
        config.headers.Authorization =`Bearer ${accessToken}`;
    }
    return config;
})

api.interceptors.response.use((res)=>(res),async (err)=>{
    if(!err.response) return Promise.reject(err);
    const originalRequest = err.config;

    if(
        originalRequest.url.includes('/auth/refresh') ||
        originalRequest.url.includes('/auth/sign-in') ||
        originalRequest.url.includes('/auth/sign-up')
    ){
        return Promise.reject(err);
    }

    originalRequest._retry = originalRequest._retry || 0;
    
    if(err.response.status === 403  && originalRequest._retry <4 ){
        originalRequest._retry++;
        try {
            const res = await authService.refreshToken();
            const newAccessToken = res.accessToken;
            Cookies.set('accessToken', newAccessToken);
            originalRequest.headers ={
                ...originalRequest.headers,
                Authorization: `Bearer ${newAccessToken}`
            }
            return api(originalRequest);
        } catch (error) {
            Cookies.remove('accessToken');
            localStorage.clear();
            sessionStorage.clear();
            return Promise.reject(error);
        }
    }

})

export default api;
