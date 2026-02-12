import NavItems from '@/components/ProductItem/NavItems/NavItems';
import styles from './style.module.scss';
import type { Product } from '@/types/store';
import { useSideBarStore } from '@/stores/useSideBarStore';


export default function ProductItem({product}: {product: Product}) {
    const { box_img, img_show, list_items,content,product_name,product_price } = styles;
    const {addListCompare} = useSideBarStore();

    const addListCompareProduct = () => {
        addListCompare(product);
    }

    return (
        <div>
            <div className={box_img}>
                <img src={product.images[0]} alt="" />
                <img className={img_show} src={product.images[1]} alt="" />
                <div className={list_items}>
                    <NavItems addCompare = {addListCompareProduct}/>
                </div>
            </div>
            <div className={content}>
                <h2 className={product_name}><a href="#">{product.name}</a></h2>
                <span className={product_price}>{product.price}</span>
            </div>
        </div>
    );
}
