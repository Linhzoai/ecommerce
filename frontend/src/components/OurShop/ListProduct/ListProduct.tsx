import ProductItem from '@/components/ProductItem/ProductIem';
import styles from './style.module.scss';
import { productStore } from '@/stores/productStore';
import Button from '@/components/Button/Button';
import Loading from '@/components/Loading/Loading';

export default function ListProduct() {
    const { container_grid, container_list, container_btn } = styles;
    const { products, isShowGrid, isLoading, page, total, showId, isLoadingMore, loadMoreProducts } = productStore();
    const handleLoadMoreProducts = () => {
        const query = `limit=${showId}&page=${+page + 1}`;
        loadMoreProducts(query);
    };
    return (
        <>
            {isLoading ? (
                <div style={{ width: '100%', height: '100vh' }}>
                    <Loading />
                </div>
            ) : (
                <>
                    <div className={isShowGrid ? container_grid : container_list}>
                        {products.map((product) => (
                            <ProductItem key={product.id} product={product} isHomePage={false} />
                        ))}
                    </div>
                    {products.length < total && (
                        <div className={container_btn}>
                            <Button
                                content="Load more products"
                                isPrimary={false}
                                disabled={isLoadingMore}
                                onClick={handleLoadMoreProducts}
                                loadingBtn={isLoadingMore}
                            />
                        </div>
                    )}
                </>
            )}
        </>
    );
}
