import HomePage from "@/pages/HomePage/HomePage";
interface Router {
    path: string;
    component: React.ComponentType;
}

const routers: Router[] = [
    { path: '/', component: HomePage }
]
export default routers