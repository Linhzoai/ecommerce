import MainLayout from '@/components/Layout/Layout';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';
import BannerOurshop from '@/components/OurShop/BannerOurshop/BannerOurshop';
import Filter from '@/components/OurShop/Filter/Filter';
import ListProduct from '@/components/OurShop/ListProduct/ListProduct';
export default function OurShop() {
    const { container, container_back, container_filter } = styles;
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };
    const handleHome = () => {
        navigate('/');
    };
    return(
        <>
            <Header/>
            <MainLayout>
                <div className={container}>
                    <div>
                        <div className={container_back}>
                            <div onClick={handleHome}>
                                Home &gt; <span style={{ color: '#333' }}>Shop</span>
                            </div>
                            <p onClick={handleBack}> &lt; Return to previous page</p>
                        </div>
                        <BannerOurshop />
                        <div className={container_filter}>
                            <Filter />
                            <ListProduct />
                        </div>
                    </div>
                </div>
            </MainLayout>
            <Footer />
        </>
    );
}
