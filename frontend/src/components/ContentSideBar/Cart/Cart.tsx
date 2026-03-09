import Title from '../Components/Title/Title';
import styles from './style.module.scss';
import NoProduct from '@/components/ContentSideBar/Components/NoProduct/NoProduct';
import ItemProduct from '../Components/ItemProduct/ItemProduct';
import Button from '@/components/Button/Button';
import { cartStore } from '@/stores/cartStore';
import { useNavigate } from 'react-router-dom';
import { useSideBarStore } from '@/stores/useSideBarStore';
export default function Cart() {
    const { container, boxBtn, total, boxFooter, containerProduct } = styles;
    const { carts } = cartStore();
    const {toggleSideBar} = useSideBarStore();
    const navigate = useNavigate();
    const handleViewShop = () => {
        navigate('/our-shop');
        toggleSideBar();
    };
    const handleViewCart = () => {
        navigate('/cart');
        toggleSideBar();
    };
    const sumTotal = carts.reduce((acc,item)=> {
        return acc + item.total!;
    },0);
    return (
        <div className={container}>
            <div className={containerProduct}>
                <Title title="CART" />
                {carts.length === 0 ? (
                    <NoProduct type="cart" onClick={handleViewShop} />
                ) : (
                    carts.map((item,index) => <ItemProduct type="cart" key={index} product={item} />)
                )}
            </div>
            {carts.length > 0 && (
                <div className={boxFooter}>
                    <div className={total}>
                        <p>SUBTOTAL: </p>
                        <p>${sumTotal}</p>
                    </div>

                    <div className={boxBtn}>
                        <Button content="View Cart" style={{ width: '100%' }} onClick={handleViewCart} />
                        <Button content="Clear Cart" style={{ width: '100%' }} isPrimary={false} />
                    </div>
                </div>
            )}
        </div>
    );
}
