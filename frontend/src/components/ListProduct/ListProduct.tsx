import MainLayout from '@/components/Layout/Layout';
import styles from './style.module.scss';
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItem from '@components/ProductItem/ProductIem';
import { productServices } from '../../services/productServer';
import { useEffect, useState } from 'react';
import type { Product } from '@/types/store';
export default function ListProduct() {
    const { container } = styles;
    const [products, setProducts] = useState<Product[]>([]);
    const loadProducts = async () => {
        const products = await productServices.getProduct();
        setProducts(products.products);
    };
    useEffect(() => {
        loadProducts();
    }, []);
    return (
        <MainLayout>
            <div className={container}>
                <CountDownBanner />
                {products.slice(0, 14).map((production, index) => (
                    <ProductItem key={index} product={production} />
                ))}
            </div>
        </MainLayout>
    );
}
