import ItemProduct from '@/components/ContentSideBar/Components/ItemProduct/ItemProduct';
import Title from '@/components/ContentSideBar/Components/Title/Title';
import styles from './style.module.scss';
import { useSideBarStore } from '@/stores/useSideBarStore';
import NoProduct from '@/components/ContentSideBar/Components/NoProduct/NoProduct';
import Button from '@/components/Button/Button';
export default function Compare() {
    const { listCompare } = useSideBarStore();

    const { container } = styles;
    return (
        <div className={container}>
            <div >
                <Title title="COMPARE" />
                {listCompare.length === 0 ? (
                    <NoProduct type="compare" />
                ) : (
                    listCompare.map((item) => <ItemProduct key={item.id} product={item} />)
                )}
            </div>
            {listCompare.length > 0 && (
                <Button content="View Compare" style={{ width: '100%' }} />
            )}
        </div>
    );
}
