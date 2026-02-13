import { useSideBarStore } from '@/stores/useSideBarStore';
import Title from '../Components/Title/Title';
import styles from './style.module.scss';
import NoProduct from '@/components/ContentSideBar/Components/NoProduct/NoProduct';
import ItemProduct from '../Components/ItemProduct/ItemProduct';
import Button from '@/components/Button/Button';
export default function WishList() {
    const { container, boxBtn } = styles;
    const { listCompare } = useSideBarStore();

    return (
        <div className={container}>
            <div>
                <Title title="WISHLIST" />
                {listCompare.length === 0 ? (
                    <NoProduct type="wishlist" />
                ) : (
                    listCompare.map((item) => <ItemProduct key={item.id} product={item} />)
                )}
            </div>
            {listCompare.length > 0 && (
                <div className={boxBtn}>
                    <Button content="View Compare" style={{ width: '100%' }} />
                    <Button content="Clear Wishlist" style={{ width: '100%' }} isPrimary={false} />
                </div>
            )}
        </div>
    );
}
