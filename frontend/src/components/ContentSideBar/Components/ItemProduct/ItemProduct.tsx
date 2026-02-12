import type {Product} from '@/types/store';
import styles from './style.module.scss';
import { IoMdClose } from "react-icons/io";
import { useSideBarStore } from '@/stores/useSideBarStore';
export default function ItemProduct({product}: {product: Product}){
    const {container, containerContent, productName, productPrice, close} = styles;
    const {removeListCompare} = useSideBarStore();
    const handleRemoveCompare = () => {
        removeListCompare(product.id);
    }
    return(
        <div className={container}>
            <img src={product.images[0]} alt={product.name} />
           <div className={containerContent}>
            <p className={productName}>{product.name}</p>
            <p className={productPrice}>{product.price}</p>
           </div>
           <div className={close}>
            <IoMdClose size={20} onClick={handleRemoveCompare}/>
           </div>
        </div>
    )
}