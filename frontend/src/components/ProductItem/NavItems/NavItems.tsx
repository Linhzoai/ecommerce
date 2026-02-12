import styles from './style.module.scss'
import { MdOutlineShoppingBag } from "react-icons/md";
import { AiOutlineHeart } from "react-icons/ai";
import { TfiReload } from "react-icons/tfi";
import { IoEyeOutline } from "react-icons/io5";
export default function NavItems({addCompare}: {addCompare: () => void}){
    const {container,item} = styles;
    return(
        <div className={container}>
           <div className={item}>
            <MdOutlineShoppingBag size={17} />

           </div>
           <div className={item}>
            <AiOutlineHeart size={17} />
           </div>
           <div className={item} onClick={addCompare}>
            <TfiReload size={17} />
           </div>
           <div className={item}>
            <IoEyeOutline size={17} />
           </div>
        </div>
    )
}