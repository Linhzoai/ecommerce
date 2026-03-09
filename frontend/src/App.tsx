import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from './routers/routers';
import { Suspense, useEffect } from 'react';
import SideBarProvider from '@components/SideBarProvider/SideBarProvie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartStore } from './stores/cartStore';
import { authStore } from './stores/authStore';
function App() {
    const accessToken = authStore((state)=>state.accessToken);
    const getCart = cartStore((state)=>state.getCart);

    useEffect(()=>{
        if(accessToken){
            getCart();
        }
    },[accessToken])
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
                <SideBarProvider />
                <Routes>
                    {routers.map((router, index) => (
                        <Route key={index} path={router.path} element={<router.component />} />
                    ))}
                </Routes>
                <ToastContainer position="top-right" autoClose={3000} />
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
