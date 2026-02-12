import styles from './style.module.scss';
import { TfiReload } from "react-icons/tfi";
import { CiHeart } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
export default function Title({title}: {title: string}){
    const {boxTitle, title_sidebar} = styles;
    const handleChoiceIcon = () => {
        switch (title) {
            case 'COMPARE':
                return <TfiReload size={24} strokeWidth={0.1} />
            case 'WISHLIST':
                return <CiHeart size={30} strokeWidth={0.1} />
            case 'CART':
                return <PiShoppingCartThin size={30} strokeWidth={0.1} />
            default:
                return 
        }
    }
    return(
        <div className={boxTitle}>
                {handleChoiceIcon()}
                <a href="">
                    <span className={title_sidebar}>{title}</span>
                </a>
            </div>
    )
}