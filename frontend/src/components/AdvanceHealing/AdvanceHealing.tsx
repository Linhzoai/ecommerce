import MainLayout from "@components/Layout/Layout"
import styles from './style.module.scss'
export default function AdvanceHealing(){
    const {container,desc,containerTile,bar,title} = styles;
    return(
        <MainLayout>
           <div className={container}>
            <div className={desc}>don't miss super offers</div>
            <div className={containerTile}>
                <div className={bar}/>
                <div className={title}>Our best products</div>
                <div className={bar}/>
            </div>
           </div>
        </MainLayout>
    )
}