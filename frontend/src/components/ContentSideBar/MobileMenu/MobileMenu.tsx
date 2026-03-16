import { dataMenu } from '@/components/Header/constant';
import { useSideBarStore } from '@/stores/useSideBarStore';
import { authStore } from '@/stores/authStore';
import { cartStore } from '@/stores/cartStore';
import { useNavigate } from 'react-router-dom';
import styles from './style.module.scss';
import { CiUser, CiLogout } from "react-icons/ci";

export default function MobileMenu() {
    const { handleOpenSideBar, toggleSideBar } = useSideBarStore();
    const { user, signOut } = authStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        signOut();
        cartStore.setState({ carts: [] });
    };

    const handleAction = (content: string) => {
        if (content === 'Sign In' && !user) {
            handleOpenSideBar('login');
        } else if (content === 'Our Shop') {
            toggleSideBar();
            navigate('/our-shop');
        } else {
            toggleSideBar();
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.menuList}>
                {dataMenu.map((item, index) => {
                    if (item.content === 'Sign In' && user) {
                        return (
                            <div key={index} className={styles.menuItemUser}>
                                <div className={styles.userInfo}>
                                    <CiUser size={20} />
                                    <span>{user.email}</span>
                                </div>
                                <div className={styles.logoutBtn} onClick={() => { handleLogout(); toggleSideBar(); }}>
                                    <CiLogout size={16} />
                                    <span>Logout</span>
                                </div>
                            </div>
                        );
                    }
                    return (
                        <div 
                            key={index} 
                            className={styles.menuItem}
                            onClick={() => handleAction(item.content)}
                        >
                            {item.content}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
