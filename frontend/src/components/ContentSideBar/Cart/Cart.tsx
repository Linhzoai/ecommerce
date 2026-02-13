import { useSideBarStore } from '@/stores/useSideBarStore';
import Title from '../Components/Title/Title';
import styles from './style.module.scss';
import NoProduct from '@/components/ContentSideBar/Components/NoProduct/NoProduct';
import ItemProduct from '../Components/ItemProduct/ItemProduct';
import Button from '@/components/Button/Button';
export default function Cart() {
    const { container, boxBtn, total } = styles;
    const { listCompare } = useSideBarStore();

    return (
        <div className={container}>
            <div>
                <Title title="CART" />
                {listCompare.length === 0 ? (
                    <NoProduct type="cart" />
                ) : (
                    listCompare.map((item) => <ItemProduct key={item.id} product={item} />)
                )}
            </div>
            {listCompare.length > 0 && (
                <div>
                    <div className={total}>
                        <p>SUBtOTAl: $0</p>
                        <p>$0</p>
                    </div>

                    <div className={boxBtn}>
                        <Button content="View Cart" style={{ width: '100%' }} />
                        <Button content="Clear Cart" style={{ width: '100%' }} isPrimary={false} />
                    </div>
                </div>
            )}
        </div>
    );
}
