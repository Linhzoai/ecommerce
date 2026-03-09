import Loading from '@/components/Loading/Loading';
import styles from './style.module.scss';
import { cartStore } from '@/stores/cartStore';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import Button from '@/components/Button/Button';
import { useNavigate } from 'react-router-dom';
import EmptyCart from './EmptyCart';

export default function Content() {
    const {
        container,
        containerCoupon,
        coupon,
        containerProduct,
        containerCheckout,
        cartTable,
        productCell,
        productImage,
        productInfo,
        productName,
        productSize,
        deleteBtn,
        quantitySelect,
        priceCell,
        subtotalCell,
        cartTotal,
        cartSubtotal,
        orderSubtotal,
        boxBtn,
        cartAdditional,
        subtotal,
        orderTotal,
        containerMethod,
        iconMethod,
        totalPayment
    } = styles;
    const { carts, deleteItemCart, updateCart, deleteCart, isLoading, productIdDelete } = cartStore();
    const navigate = useNavigate();
    const handleUpdateQuantity = (number: number, productId: string, size: string) => {
        const data = {
            productId,
            quantity: number,
            size
        };
        updateCart(data)
            .then(() => {
                toast.success('Cập nhật số lượng thành công');
            })
            .catch(() => {
                toast.error('Cập nhật số lượng thất bại');
            });
    };

    const handleDeleteItemCart = (id: string, size: string) => {
        const data = {
            productId: id,
            size
        };
        deleteItemCart(data)
            .then(() => {
                toast.success('Xóa sản phẩm thành công');
            })
            .catch(() => {
                toast.error('Xóa sản phẩm thất bại');
            });
    };
    const handleDeleteCart = () => {
        deleteCart()
            .then(() => {
                toast.success('Xóa giỏ hàng thành công');
            })
            .catch(() => {
                toast.error('Xóa giỏ hàng thất bại');
            });
    };

    const handleNavigateShopping = () => {
        navigate('/shop');
    };

    const total = carts.reduce((total, item) => total + item.total!, 0);
    const formatTotal = total.toLocaleString('en-US');

    return (
        <div className={container}>
            {carts.length === 0 ? (
                <EmptyCart />
            ) : (
                <>
                    <div className={containerProduct}>
                        <div>
                            <table className={cartTable}>
                                <thead>
                                    <tr>
                                        <th style={{ textAlign: 'left' }}>PRODUCT</th>
                                        <th></th>
                                        <th>PRICE</th>
                                        <th>SKU</th>
                                        <th>QUANTITY</th>
                                        <th>SUBTOTAL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carts.map((item) => (
                                        <tr key={item.id + item.choiceSize}>
                                            <td>
                                                <div className={productCell}>
                                                    <img
                                                        className={productImage}
                                                        src={item.images[0]}
                                                        alt={item.name}
                                                    />
                                                    <div className={productInfo}>
                                                        <p className={productName}>{item.name}</p>
                                                        <p className={productSize}>
                                                            Size:{' '}
                                                            <span style={{ color: '#888' }}>{item.choiceSize}</span>
                                                        </p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <button
                                                    className={deleteBtn}
                                                    title="Remove item"
                                                    onClick={() => handleDeleteItemCart(item.id, item.choiceSize!)}
                                                >
                                                    <RiDeleteBin6Line size={14} />
                                                </button>
                                            </td>
                                            <td className={priceCell}>${item.price}</td>
                                            <td className={priceCell}>12345</td>
                                            <td>
                                                <select
                                                    className={quantitySelect}
                                                    value={item.quantity}
                                                    onChange={(e) =>
                                                        handleUpdateQuantity(
                                                            Number(e.target.value),
                                                            item.id,
                                                            item.choiceSize!
                                                        )
                                                    }
                                                >
                                                    {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
                                                        <option key={num} value={num}>
                                                            {num}
                                                        </option>
                                                    ))}
                                                </select>
                                            </td>
                                            <td className={subtotalCell}>${item.total?.toFixed(2)}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {isLoading && <Loading />}
                        </div>
                        <div className={containerCoupon}>
                            <div className={coupon}>
                                <input type="text" placeholder="Coupon code" />
                                <Button content="OK" isPrimary={false} />
                            </div>
                            <Button
                                content=" CLEAR SHOPPING CART"
                                isPrimary={false}
                                onClick={handleDeleteCart}
                            ></Button>
                        </div>
                    </div>
                    <div className={containerCheckout}>
                        <div className={cartTotal}>
                            {isLoading && <Loading />}
                            <h3>Cart totals</h3>
                            <table>
                                <tbody>
                                    <tr className={cartSubtotal}>
                                        <td>Subtotal</td>
                                        <td className={subtotal}>${formatTotal}</td>
                                    </tr>
                                    <tr className={orderSubtotal}>
                                        <td>Total</td>
                                        <td className={orderTotal}>${formatTotal}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className={boxBtn}>
                                <Button
                                    content="PROCEED TO CHECKOUT"
                                    style={{ width: '100%', marginBottom: '10px' }}
                                ></Button>
                                <Button
                                    content="CONTINUE SHOPPING"
                                    isPrimary={false}
                                    style={{ width: '100%' }}
                                ></Button>
                            </div>
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
                    </div>
                </>
            )}
        </div>
    );
}
