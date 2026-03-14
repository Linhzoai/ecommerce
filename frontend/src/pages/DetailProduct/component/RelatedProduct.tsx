import { productStore } from "@/stores/productStore";
import { useEffect } from "react";
import styles from '../style.module.scss';
import SliderCommon from "@/components/SliderCommon/SliderCommon";
import ProductItem from "@/components/ProductItem/ProductIem";

export default function RelatedProduct({productId}: {productId: string}) {
    const {container_related} = styles;
    const { getRelatedProduct,relatedProduct } = productStore();
    useEffect(()=>{
        getRelatedProduct(productId);
    },[])
    return (
        <div className={container_related}>
            <h2>Related Product</h2>
            <SliderCommon slidesToShow={3}>
                {relatedProduct.map((item: any, index: number) => (
                    <ProductItem key={index} product={item} isHomePage={false} />
                ))}
            </SliderCommon>
        </div>
    )
}