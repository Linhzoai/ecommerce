import Title from '../Components/Title/Title';
import styles from './style.module.scss';
import NoProduct from '@/components/ContentSideBar/Components/NoProduct/NoProduct';
export default function WishList() {
    const { container } = styles;
    return (
        <div className={container}>
            <Title title="WISHLIST" />
            <NoProduct type="wishlist" />
        </div>
    );
}
