import { BrowserRouter, Routes, Route } from 'react-router-dom';
import routers from './routers/routers';
import {Suspense} from 'react';
import SideBarProvider from '@components/SideBarProvider/SideBarProvie';
function App() {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
            <SideBarProvider />
                <Routes>
                {routers.map((router, index) => (
                    <Route key={index} path={router.path} element={<router.component />} />
                ))}
            </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
