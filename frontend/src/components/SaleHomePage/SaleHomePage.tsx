import Button from "@components/Button/Button";
import styles from "./style.module.scss"
import useTranslateImg from "@/hooks/useTranslateImg";
export default function SaleHomePage(){
    const {container, containerLeft, containerCenter, containerRight, title, desc} = styles;
    const {translateX} = useTranslateImg();
    return(
        <div className={container}>
           <div className={containerLeft}>
            <img style={{transform: `translateX(-${translateX}%)`}} src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="image" />
           </div>
           <div className={containerCenter}>
            <h2 className={title}>Sale of the year</h2>
            <p className={desc}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
            <div><Button content="Read more" isPrimary={false}/></div>
           </div>
           <div className={containerRight}>
            <img style={{transform: `translateX(${translateX}%)`}} src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="image" />
           </div>
        </div>
    )
}