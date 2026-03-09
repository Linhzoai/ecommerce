import { useSideBarStore } from '@/stores/useSideBarStore';
import SliderCommon from '@/components/SliderCommon/SliderCommon.tsx';
import style from './style.module.scss';
import { useState } from 'react';
import SelectBox from '@/components/SelectBox/SelectBox';
import Button from '@/components/Button/Button';
import { TfiReload } from 'react-icons/tfi';
import { PiHeartStraightThin } from 'react-icons/pi';
import { PiTwitterLogoLight } from 'react-icons/pi';
import { LiaFacebookF } from 'react-icons/lia';
import { BiLogoVk } from 'react-icons/bi';
import { TfiPinterest } from 'react-icons/tfi';
import { TbMail } from 'react-icons/tb';
import { LiaLinkedinIn } from 'react-icons/lia';
import { LiaWhatsapp } from 'react-icons/lia';
import { toast } from 'react-toastify';
import { cartStore } from '@/stores/cartStore';
import { cn } from '@/libs/until';
export default function ProductDetail() {
    const [sizeChoice, setSizeChoice] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(1);
    const { detailProduct } = useSideBarStore();
    const {addToCart} = cartStore();
    const { container,btn_clear, img, product_name, product_price, product_desc,active, product_action, action_size, box_size, box_addToCart, size_item, box_feature, feature_atc, feature_meta, feature_share } = style;
    const defaultOptions = [
        { label: '1', value: '1' },
        { label: '2', value: '2' },
        { label: '3', value: '3' },
        { label: '4', value: '4' },
        { label: '5', value: '5' },
        { label: '6', value: '6' },
        { label: '7', value: '7' },
        { label: '8', value: '8' },
        { label: '9', value: '9' },
        { label: '10', value: '10' }
    ];
    const handleGetValue = (value: string, type: string) => {
        console.log(value, type);
    };
    const handleChoiceSize = (value: string)=>{
        setSizeChoice(value);
    }
    const handleUpdateQuantity = (value: string)=>{
        setQuantity(Number(value));
    }
    const handleAddToCart = ()=>{
        if(!detailProduct?.id){
            return;
        }
        if(!sizeChoice){
            toast.warn('Chọn kích thước');
            return ;
        }
        const data = {
            productId: detailProduct?.id,
            quantity: quantity,
            size: sizeChoice
        }
        addToCart(data).then(()=>{
            toast.success('Thêm vào giỏ hàng thành công');
        }).catch((err)=>{
            toast.error('Thêm vào giỏ hàng thất bại: ' + err.response.data.message);
        });
    }
    return (
        <div className={container}>
            <SliderCommon>
                {detailProduct?.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="" className={img} />
                    </div>
                ))}
            </SliderCommon>
            <h3 className={product_name}>{detailProduct?.name}</h3>
            <p className={product_price}>${detailProduct?.price}</p>
            <div className={product_desc}>{detailProduct?.description}</div>
            <div className={product_action}>
                <p className={action_size}>Size: {sizeChoice}</p>
                <div className={box_size}>
                    {detailProduct?.size.map((size, index) => (
                        <button key={index} className={cn(size_item, sizeChoice === size.name ? active : '')} onClick={() => handleChoiceSize(size.name)}>
                            {size.name}
                        </button>
                    ))}
                    {sizeChoice && (
                        <button className={btn_clear} onClick={() => setSizeChoice('')}>Clear</button>
                    )}
                </div>
                <div className={box_addToCart}>
                    <SelectBox options={defaultOptions} type="updateQuantity" getValue={handleUpdateQuantity} />
                    <Button content="ADD TO CART" style={{ flex: '1' }} onClick={handleAddToCart}/>
                </div>
                <p>Or</p>
                <Button content="BUY NOW" style={{ width: '100%' }} />
                <div className={box_feature}>
                    <div className={feature_atc}>
                        <TfiReload /> Add to compare
                    </div>
                    <div className={feature_atc}>
                        <PiHeartStraightThin size={19} /> Add to wishlist
                    </div>
                    <div className={feature_meta}>
                        SKU: <span>12345</span>
                    </div>
                    <div className={feature_meta}>
                        Category: <span>Men</span>
                    </div>
                    <div className={feature_meta}>
                        Estimated delivery: <span>4 - 6 days</span>
                    </div>
                    <div className={feature_share}>
                        Share:
                        <span>
                            <PiTwitterLogoLight />
                            <LiaFacebookF />
                            <BiLogoVk />
                            <TfiPinterest />
                            <TbMail />
                            <LiaLinkedinIn />
                            <LiaWhatsapp />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
