import styles from './style.module.scss';
import { RxReload } from "react-icons/rx";

export default function Loading(){
    const {container, icon} = styles;
    return(
        <>
           <div className={container}>
                <RxReload size={20} className={icon}/>
           </div>
        </>
    )
}