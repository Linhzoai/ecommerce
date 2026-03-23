import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from './routers/routers';
import { Suspense, useEffect, useState } from 'react';
import SideBarProvider from '@components/SideBarProvider/SideBarProvie';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { cartStore } from './stores/cartStore';
import { authStore } from './stores/authStore';
import LoadingSkeleton from './pages/LoadingSkeleton/LoadingSkeleton';

function App() {
    const { accessToken, user, loading, refreshToken, fetchMe} = authStore();
    const {carts} = cartStore();
    const getCart = cartStore((state) => state.getCart);
    const [starting, setStarting] = useState(true);
    const init = async () => {
        try {
            if (!accessToken) {
                await refreshToken();
            }
            if (accessToken && !user) {
                await fetchMe();
            }
            await getCart();
        } catch {
            // Refresh hoặc fetchMe thất bại → bỏ qua, user chưa đăng nhập
        } finally {
            setStarting(false);
        }
    };

    useEffect(() => {
        init();
    }, []);

    useEffect(() => {
        if (accessToken) {
            getCart();
        }
    }, [accessToken]);

    if (starting || loading || !carts) {
        return <LoadingSkeleton />;
    }

    return (
        <BrowserRouter>
            <Suspense fallback={<LoadingSkeleton />}>
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

