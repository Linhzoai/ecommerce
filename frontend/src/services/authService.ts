import api from "@/libs/axiosClient";

export const authService = {
    signIn: async (data: {email: string, password: string}) => {
        const response = await api.post('/auth/signIn', data);
        return response.data;
    },
    signUp: async (data: {email: string, password: string}) => {
        const response = await api.post('/auth/signUp', data);
        return response.data;
    },
    signOut: async () =>{
        const response = await api.post('/auth/signOut');
        return response.data;
    },
    refreshToken: async () =>{
        const response = await api.post('/auth/refresh-token');
        return response.data;
    },
    fetchMe: async () => {
        const response = await api.get('/user/info');
        return response.data;
    }
}