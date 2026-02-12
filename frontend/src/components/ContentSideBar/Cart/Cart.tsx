import Title from '../Components/Title/Title';
import styles from './style.module.scss';
import NoProduct from '@/components/ContentSideBar/Components/NoProduct/NoProduct';
export default function Cart() {
    const { container } = styles;
    return (
        <div className={container}>
            <Title title="CART" />
            <NoProduct type="cart" />
        </div>
    );
}
