import HomePage from "@/pages/HomePage/HomePage";
import OurShop from "@/pages/OurShop/OurShop";
import Cart from "@/pages/Cart/Cart";
import DetailProduct from "@/pages/DetailProduct/DetailProduct";
interface Router {
    path: string;
    component: React.ComponentType;
}

const routers: Router[] = [
    { path: '/', component: HomePage },
    { path: '/our-shop', component: OurShop },
    { path: '/cart', component: Cart },
    { path: '/product/:id', component: DetailProduct },
]
export default routers