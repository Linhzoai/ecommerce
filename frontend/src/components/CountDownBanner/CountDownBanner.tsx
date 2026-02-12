import Button from '@components/Button/Button';
import styles from './style.module.scss'
import CountDownTimer from "@components/CountDownTimer/CountDownTimer";
export default function CountDownBanner(){
    const targetDate = "2026-07-10T00:00:00";
    const  {container,container_title, title} = styles;
    return(
        <div className={container}>
            <CountDownTimer targetDate={targetDate}/>
            <div className={container_title}>
                <h2 className={title}>The classics make a comeback</h2>
            </div>
            <Button content="Buy Now"/>
        </div>
    )
}