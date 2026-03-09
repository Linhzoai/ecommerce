import { TfiLayoutGrid4 } from 'react-icons/tfi';
import { CiCircleList } from 'react-icons/ci';
import styles from './style.module.scss';
import { productStore } from '@/stores/productStore';
import SelectBox from '@/components/SelectBox/SelectBox.tsx';
import { useEffect } from 'react';
export default function Filter() {
    const { container, right, left, boxIcon } = styles;
    const { showOption, sortOption, sortId, showId, isShowGrid, setShowId, setSortId, setIsShowGrid, getProduct } =
        productStore();
    useEffect(() => {
        const query = `sort=${sortId}&limit=${showId}&page=1`;
        getProduct(query);
    }, [sortId, showId]);

    const getSelectValue = (value: string, type: string) => {
        if (type === 'sort') {
            setSortId(Number(value));
        }
        if (type === 'show') {
            setShowId(Number(value));
        }
    };
    const handleShowGrid = (type: string) => {
        if (type === 'grid') {
            setIsShowGrid(true);
        }
        if (type === 'list') {
            setIsShowGrid(false);
        }
    };

    return (
        <div className={container}>
            <div className={left}>
                <SelectBox options={sortOption} getValue={getSelectValue} type="sort" />
                <div className={boxIcon}>
                    <TfiLayoutGrid4
                        size={20}
                        style={{ cursor: 'pointer', color: '#333' }}
                        onClick={() => handleShowGrid('grid')}
                    />
                    <div style={{ width: '1px', backgroundColor: '#e2e2e2ff', height: '20px' }}></div>
                    <CiCircleList
                        size={20}
                        style={{ cursor: 'pointer', color: '#333' }}
                        onClick={() => handleShowGrid('list')}
                    />
                </div>
            </div>
            <div className={right}>
                Show
                <SelectBox options={showOption} getValue={getSelectValue} type="show" />
            </div>
        </div>
    );
}
