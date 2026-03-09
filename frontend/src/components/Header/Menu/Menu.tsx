import { authStore } from '@/stores/authStore';
import { useSideBarStore } from '@/stores/useSideBarStore';
import styles from '../style.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {cartStore} from '@/stores/cartStore';
interface MenuProps {
    data: Array<{ content: string; href: string }>;
}

export default function Menu({ data }: MenuProps) {
    const { handleOpenSideBar } = useSideBarStore();
    const { user, signOut } = authStore();
    const [isShow, setIsShow] = useState(false);
    const navigate = useNavigate();
    const handleOpenSideBarLogin = (type: string) => {
        if (type === 'Sign In' && !user) {
            handleOpenSideBar('login');
        }
        if (type === 'Our Shop') {
            navigate('/our-shop');
        }
    };
    const handleRendetText = (content: string) => {
        if (content === 'Sign In' && user) {
            return user.email;
        }
        return content;
    };
    const handleLogout = () => {
        signOut();
        cartStore.setState({carts: []});
    };
    return data.map((item, index) => (
        <a
            className={styles.menu}
            style={{ textDecoration: 'none', color: 'black' }}
            href={item.href}
            key={index}
            onClick={() => handleOpenSideBarLogin(item.content)}
            onMouseEnter={() => setIsShow(true)}
            onMouseLeave={() => setIsShow(false)}
        >
            <div>{handleRendetText(item.content)}</div>
            {isShow && user && item.content === 'Sign In' && <div onClick={handleLogout} className={styles.subLogout}>LOG OUT</div>}
        </a>
    ));
}
