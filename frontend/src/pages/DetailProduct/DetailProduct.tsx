import Header from '@/components/Header/Header';
import styles from './style.module.scss';
import MainLayout from '@/components/Layout/Layout';
import Footer from '@/components/Footer/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLayoutEffect, useState } from 'react';
import { productStore } from '@/stores/productStore';
import { toast } from 'react-toastify';
import type { Product } from '@/types/store';
import { cn } from '@/libs/until';
import Button from '@/components/Button/Button';
import { set } from 'zod';
import { cartStore } from '@/stores/cartStore';
import { useSideBarStore } from '@/stores/useSideBarStore';
export default function DetailProduct() {
    const {
        container,
        container_navigation,
        container_product,
        container_image,
        container_info,
        product_name,
        product_desc,
        product_price,
        box_size,
        item_size,
        btn_clear,
        product_size,
        active,
        box_cart,
        box_buy,
        label_box,
        box_btn,
        box_quantity
    } = styles;
    const { getProductById } = productStore();
    const {addToCart} = cartStore();
    const {handleOpenSideBar} = useSideBarStore();
    const [product, setProduct] = useState<Product | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [sizeChoice, setSizeChoice] = useState<string>("");
    const [quantity, setQuantity] = useState<number>(0);
    const handleReturnToPreviousPage = () => {
        navigate(-1);
    };
    const handleReturnToHome = () => {
        navigate('/');
    };
    const handleUpdateSize = (size: string)=>{
        setSizeChoice(size);
    }
    const handeUpdateQuantity = (type:string, num?: number)=>{
        if(type==="up"){
            if(quantity===99) return;
            setQuantity(prev=>prev+1);
        }
        else if(type==="down"){
            if(quantity===0) return;
            setQuantity(prev=>prev-1);
        }
        else if(type === "in"){
            console.log(num);
            if(num! >= 99) return setQuantity(99);
            if(num! < 1) return setQuantity(0);
            return setQuantity(num!);    
        }
    }
    const handleAddToCart = ()=>{
        if(quantity ===0 || sizeChoice===""){
            toast.warn("Vui lòng chọn đầy đủ size và số lượng để thêm vào giỏ hàng");
            return;
        }
        const data = {
            productId: location.pathname.split('/')[2],
            quantity,
            size: sizeChoice,
        }
        addToCart(data).then(res=>{
            toast.success("Thêm sản phẩm vào giỏ hàng thàng công");
            handleOpenSideBar("cart");
        })
        .catch(err=>{
            toast.error("Lỗi khi thêm sản phẩm");
        })
    }

    useLayoutEffect(() => {
        getProductById(location.pathname.split('/')[2])
            .then((res) => {
                setProduct(res);
            })
            .catch((err) => {
                toast.error(err);
                navigate(-1);
            });
    }, []);
    return (
        <div>
            <Header />
            <MainLayout>
                <div className={container}>
                    <div className={container_navigation}>
                        <div onClick={handleReturnToHome}>Home &gt; Men</div>
                        <div onClick={handleReturnToPreviousPage}>&lt;Return to previous page</div>
                    </div>
                    <div className={container_product}>
                        <div className={container_image}>
                            {product?.images.map((image) => (
                                <img key={image} src={image} alt={image} />
                            ))}
                        </div>
                        <div className={container_info}>
                            <div className={product_name}> {product?.name} </div>
                            <div className={product_price}>${product?.price}</div>
                            <div className={product_desc}>{product?.description}</div>
                            <div className={product_size}>Size: {sizeChoice}</div>
                            <div className={box_size}>
                                {product?.size.map((item,index) => (
                                    <button key={index} className={cn(item_size, sizeChoice===item.name && active)} onClick={()=>handleUpdateSize(item.name)}>{item.name}</button>
                                ))}
                                {sizeChoice && <button className={btn_clear} onClick={()=>handleUpdateSize("")}>Clear</button>}
                            </div>
                            <div className={box_btn}>
                                <div className={box_cart}>
                                    <div className={box_quantity}>
                                        <span onClick={()=>handeUpdateQuantity("down")}>-</span>
                                        <input max={99} type="number" value={quantity===0?"":quantity} onChange={(e)=>handeUpdateQuantity("in",Number(e.target.value))}/>
                                        <span onClick={()=>handeUpdateQuantity("up")}>+</span>
                                    </div>
                                    <Button content="ADD TO CART" onClick={handleAddToCart}/>
                                </div>
                                <div className={label_box}>OR</div>
                                <div className={box_buy}>
                                    <Button content ="BUY NOW"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
            <Footer />
        </div>
    );
}
