
import Button from '@/components/Button/Button';
import style from './style.module.scss';
import { PiShoppingCartThin } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
export default function EmptyCart(){
    const {containerEmptyCart,title,description,} = style;
    const navigate = useNavigate();
    const handleBackShop = ()=>{
        navigate("/our-shop");
    }
    return(
        <div className={containerEmptyCart}>
            <PiShoppingCartThin size={45} />
            <h1 className={title}>YOUR SHOPPING CART IS EMPTY</h1>
            <p className={description}>We invite you to get acquainted with an assortment of our shop. Surely you can find something for yourself!</p>
            <Button content='RETURN TO SHOP' style={{fontSize: '11.9px', padding: '10.5px 1.7rem'}} onClick={handleBackShop}/>
        </div>
    )
}