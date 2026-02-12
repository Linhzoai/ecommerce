import { cn } from '@/libs/until';
import styles from './style.module.scss';
import { useSideBarStore } from '@/stores/useSideBarStore';
import { TfiClose } from "react-icons/tfi";
import Login from '@components/ContentSideBar/Login/Login';
import Compare from '@components/ContentSideBar/Compare/Compare';
import WishList from '@components/ContentSideBar/WishList/WishList';
import Cart from '@components/ContentSideBar/Cart/Cart';
export default function SideBarProvider() {
    const { container, overlay, sideBar, sideBarOpen, close } = styles;
    const { isOpen, toggleSideBar, type } = useSideBarStore();
    const renderContent = () =>{
        switch (type) {
            case 'login':
                return <Login />
            case 'reload':
                return <Compare />
            case 'wishlist':
                return <WishList />
            case 'cart':
                return <Cart />
            default:
                return <Login />
        }
    }
    return (
        <div className={container}>
            <div className={cn(isOpen ? overlay : '')} onClick={toggleSideBar}></div>
            <div className={cn(sideBar, isOpen ? sideBarOpen : '')}>
                {isOpen && (
                    <div className={close} onClick={toggleSideBar}>
                        <TfiClose size={16} />
                    </div>
                )}
                {renderContent()}
            </div>
        </div>
    );
}
