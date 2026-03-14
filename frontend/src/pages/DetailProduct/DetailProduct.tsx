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
import { cartStore } from '@/stores/cartStore';
import { useSideBarStore } from '@/stores/useSideBarStore';
import { authStore } from '@/stores/authStore';
import { CiHeart } from 'react-icons/ci';
import { TfiReload } from 'react-icons/tfi';
import DropMenu from '@/components/DropMenu/DropMenu';
import Information from './component/Information';
import Review from './component/Review';
import RelatedProduct from './component/RelatedProduct';
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
        box_quantity,
        box_icon,
        cartAdditional,
        containerMethod,
        iconMethod,
        totalPayment,
        product_meta,
        product_sku,
        product_category,
        image_wrapper
    } = styles;
    const { getProductById } = productStore();
    const { addToCart } = cartStore();
    const { user } = authStore();
    const { handleOpenSideBar } = useSideBarStore();
    const [product, setProduct] = useState<Product | null>(null);
    const navigate = useNavigate();
    const location = useLocation();
    const [sizeChoice, setSizeChoice] = useState<string>('');
    const [quantity, setQuantity] = useState<number>(0);
    const [menuSelected, setMenuSelected] = useState<number>(1);
    const dataMenu = [
        { id: 1, titels: 'additional information', contents: <Information isSelected={menuSelected === 1} /> },
        { id: 2, titels: 'review (0)', contents: <Review isSelected={menuSelected === 2} /> }
    ];
    const handleReturnToPreviousPage = () => {
        navigate(-1);
    };
    const handleReturnToHome = () => {
        navigate('/');
    };
    const handleUpdateSize = (size: string) => {
        setSizeChoice(size);
    };
    const handeUpdateQuantity = (type: string, num?: number) => {
        if (type === 'up') {
            if (quantity === 99) return;
            setQuantity((prev) => prev + 1);
        } else if (type === 'down') {
            if (quantity === 0) return;
            setQuantity((prev) => prev - 1);
        } else if (type === 'in') {
            console.log(num);
            if (num! >= 99) return setQuantity(99);
            if (num! < 1) return setQuantity(0);
            return setQuantity(num!);
        }
    };
    const handleAddToCart = () => {
        if (!user) {
            toast.warn('Vui lòng đăng nhập để thêm sản phẩm vào giỏ hàng');
            return;
        }
        if (quantity === 0 || sizeChoice === '') {
            toast.warn('Vui lòng chọn đầy đủ size và số lượng để thêm vào giỏ hàng');
            return;
        }
        const data = {
            productId: location.pathname.split('/')[2],
            quantity,
            size: sizeChoice
        };
        addToCart(data)
            .then(() => {
                toast.success('Thêm sản phẩm vào giỏ hàng thàng công');
                handleOpenSideBar('cart');
            })
            .catch(() => {
                toast.error('Lỗi khi thêm sản phẩm');
            });
    };
    const handleMenuSelected = (index: number) => {
        if (menuSelected === index) {
            setMenuSelected(-1);
            return;
        }
        setMenuSelected(index);
    };
    const handleZoom = (e: React.MouseEvent<HTMLImageElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        e.currentTarget.style.transformOrigin = `${x}% ${y}%`;
        e.currentTarget.style.transform = `scale(1.3)`;
    };
    const handleBuyNow=  () =>{
        toast.success("Tính năng dang được phát triển");
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
                                <div key={image} className={image_wrapper}>
                                    <img src={image} alt={image} onMouseLeave={(e)=> e.currentTarget.style.transform = `scale(1)`} onMouseMove={(e)=> handleZoom(e)}/>
                                </div>
                            ))}
                        </div>
                        <div className={container_info}>
                            <div className={product_name}> {product?.name} </div>
                            <div className={product_price}>${product?.price}</div>
                            <div className={product_desc}>{product?.description}</div>
                            <div className={product_size}>Size: {sizeChoice}</div>
                            <div className={box_size}>
                                {product?.size.map((item, index) => (
                                    <button key={index} className={cn(item_size, sizeChoice === item.name && active)} onClick={() => handleUpdateSize(item.name)} >
                                        {item.name}
                                    </button>
                                ))}
                                {sizeChoice && (
                                    <button className={btn_clear} onClick={() => handleUpdateSize('')}>
                                        Clear
                                    </button>
                                )}
                            </div>
                            <div className={box_btn}>
                                <div className={box_cart}>
                                    <div className={box_quantity}>
                                        <span onClick={() => handeUpdateQuantity('down')}>-</span>
                                        <input
                                            max={99}
                                            type="number"
                                            value={quantity === 0 ? '' : quantity}
                                            onChange={(e) => handeUpdateQuantity('in', Number(e.target.value))}
                                        />
                                        <span onClick={() => handeUpdateQuantity('up')}>+</span>
                                    </div>
                                    <Button content="ADD TO CART" onClick={handleAddToCart} disabled={sizeChoice===''}/>
                                </div>
                                <div className={label_box}>OR</div>
                                <div className={box_buy}>
                                    <Button content="BUY NOW" onClick={handleBuyNow} disabled={sizeChoice===''}/>
                                </div>
                            </div>
                            <div className={box_icon}>
                                <span>
                                    <CiHeart size={24} />
                                </span>
                                <span>
                                    <TfiReload size={20} />
                                </span>
                            </div>
                            <div className={cartAdditional}>
                                <div className={containerMethod}>
                                    <fieldset>
                                        <legend>
                                            GUARANTEED <span style={{ color: 'rgb(46, 125, 50)' }}>SAFE</span> CHECKOUT
                                        </legend>
                                        <span className={iconMethod}>
                                            <img
                                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/visa.jpeg"
                                                alt=""
                                            />
                                            <span>Pay safely with Visa</span>
                                        </span>
                                        <span className={iconMethod}>
                                            <img
                                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/master-card.jpeg"
                                                alt=""
                                            />
                                            <span>Pay safely with Master Card</span>
                                        </span>
                                        <span className={iconMethod}>
                                            <img
                                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/paypal.jpeg"
                                                alt=""
                                            />
                                            <span>Pay safely with Paypal</span>
                                        </span>
                                        <span className={iconMethod}>
                                            <img
                                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/american-express.jpeg"
                                                alt=""
                                            />
                                            <span>Pay safely with American Express</span>
                                        </span>
                                        <span className={iconMethod}>
                                            <img
                                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/maestro.jpeg"
                                                alt=""
                                            />
                                            <span>Pay safely with Maestro</span>
                                        </span>
                                        <span className={iconMethod}>
                                            <img
                                                src="https://xstore.8theme.com/elementor2/marseille04/wp-content/themes/xstore/images/woocommerce/payment-icons/bitcoin.jpeg"
                                                alt=""
                                            />
                                            <span>Pay safely with Bitcoin</span>
                                        </span>
                                    </fieldset>
                                    <div className={totalPayment}>
                                        Your Payment is <span>100% Secure</span>
                                    </div>
                                </div>
                            </div>
                            <div className={product_meta}>
                                <div className={product_sku}>
                                    SKU: <span>12345</span>
                                </div>
                                <div className={product_category}>
                                    Category: <span>Men</span>
                                </div>
                            </div>
                            {dataMenu.map((item) => (
                                <DropMenu
                                    key={item.id}
                                    titles={item.titels}
                                    contents={item.contents}
                                    isSelected={menuSelected === item.id}
                                    onClick={() => handleMenuSelected(item.id)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
                <RelatedProduct productId={location.pathname.split('/')[2]} />
            </MainLayout>
            <Footer />
        </div>
    );
}
