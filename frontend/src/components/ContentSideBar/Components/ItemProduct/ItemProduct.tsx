import type { Product } from '@/types/store';
import styles from './style.module.scss';
import { IoMdClose } from 'react-icons/io';
import { useSideBarStore } from '@/stores/useSideBarStore';
import { cartStore } from '@/stores/cartStore';
import Loading from '@/components/Loading/Loading';
export default function ItemProduct({ product,type, ...props }: { product: Product,type?: string }) {
    const { container, containerContent, productName, productPrice, close,size } = styles;
    const { removeListCompare } = useSideBarStore();
    const {deleteItemCart,productIdDelete} = cartStore();
    const handleRemoveCompare = () => {
        if(type === "cart"){
            deleteItemCart({productId: product.id, size: product.choiceSize!});
        }
        else{
            removeListCompare(product.id);
        }
    };
    return (
        <div className={container} {...props}>
            {productIdDelete === product.id && <Loading />}
            <img src={product.images[0]} alt={product.name} />
            <div className={containerContent}>
                <p className={productName}>{product.name}</p>
                <p style={{color: "#888"}} className={size}>Size: {product.choiceSize}</p>
                <p style={{color: "#888", marginBottom: "10px"}} className={productPrice}>{product.quantity} x ${product.price}</p>
                <p >SKU: 12345</p>
            </div>
            <div className={close}>
                <IoMdClose size={20} onClick={handleRemoveCompare} />
            </div>
        </div>
    );
}
