import Banner from "@components/Banner/Banner";
import Header from "@components/Header/Header";
import Info from "@components/Info/Info";
import styles from './style.module.scss'
import AdvanceHealing from "@/components/AdvanceHealing/AdvanceHealing";
import ListProduct from "@/components/ListProduct/ListProduct";
import SaleHomePage from "@/components/SaleHomePage/SaleHomePage";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
    const {containerHeader} = styles;
    return (
        <div className={containerHeader}>
            <Header/>
            <Banner/>
            <Info/>
            <AdvanceHealing/>
            <ListProduct/>
            <SaleHomePage/>
            <Footer/>
        </div>
    );
}
