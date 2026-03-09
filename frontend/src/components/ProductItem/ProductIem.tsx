import NavItems from '@/components/ProductItem/NavItems/NavItems';
import styles from './style.module.scss';
import type { Product } from '@/types/store';
import { useSideBarStore } from '@/stores/useSideBarStore';
import { cn } from '.././../libs/until.ts';
import Button from '../Button/Button.tsx';
import { productStore } from '@/stores/productStore.ts';
import { useState } from 'react';
import { authStore } from '@/stores/authStore.ts';
import { cartStore } from '@/stores/cartStore.ts';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
interface ProductItemProps {
    product: Product;
    isHomePage?: boolean;
}

export default function ProductItem({ product, isHomePage = true }: ProductItemProps) {
    const {
        container,
        container_list,
        box_img,
        img_show,
        list_items,
        content,
        product_name,
        product_price,
        box_size,
        size,
        text_center,
        btn_add_to_cart,
        size_act,
        clear_size
    } = styles;
    const [sizeChoose, setSizeChoose] = useState<string>('');
    const { user } = authStore();
    const { addListCompare, handleOpenSideBar } = useSideBarStore();
    const { addToCart } = cartStore();
    const { isShowGrid } = productStore();
    const navigate = useNavigate();
    const addListCompareProduct = () => {
        addListCompare(product);
    };

    const handleChooseSize = (size: string) => {
        setSizeChoose(size);
    };

    const handleAddToCart = () => {
        if (!user) {
            toast.error('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
            handleOpenSideBar('sign-in');
            return;
        }
        if (!sizeChoose) {
            toast.warn('Vui lòng chọn size');
            return;
        }
        const data = {
            productId: product.id,
            size: sizeChoose,
            quantity: 1
        };
        addToCart(data)
            .then(() => {
                toast.success('Thêm sản phẩm vào giỏ hàng thành công');
                handleOpenSideBar('cart');
            })
            .catch(() => {
                toast.error('Thêm sản phẩm vào giỏ hàng thất bại');
            });
    };

    const handleShowDetail = () => {
        handleOpenSideBar('product-detail', product);
    };

    const handleNavigateToDetail = () => {
        navigate(`/product/${product.id}`);
    };

    return (
        <div className={cn(isShowGrid ? container : container_list)} onClick={handleNavigateToDetail}>
            <div className={box_img}>
                <img src={product.images[0]} alt="" />
                <img className={img_show} src={product.images[1]} alt="" />
                <div className={list_items}>
                    <NavItems addCompare={addListCompareProduct} showDetail={handleShowDetail} />
                </div>
            </div>
            <div className={content}>
                {!isHomePage && (
                    <>
                        <div className={box_size}>
                            {product.size.map((item, index) => (
                                <div
                                    key={index}
                                    className={cn(size, sizeChoose === item.name ? size_act : '')}
                                    onClick={() => handleChooseSize(item.name)}
                                >
                                    {item.name}
                                </div>
                            ))}
                        </div>
                        {sizeChoose && (
                            <div className={clear_size} onClick={() => setSizeChoose('')}>
                                clear
                            </div>
                        )}
                    </>
                )}
                <h2 className={cn(product_name, !isHomePage && text_center)}>
                    <a href="#" onClick={handleNavigateToDetail}>
                        {product.name}
                    </a>
                </h2>
                <span className={cn(product_price, !isHomePage && text_center)}>${product.price}</span>
                {!isHomePage && (
                    <div className={btn_add_to_cart}>
                        <Button content="Add to cart" style={{ padding: '10.5px 30px' }} onClick={handleAddToCart} />
                    </div>
                )}
            </div>
        </div>
    );
}
