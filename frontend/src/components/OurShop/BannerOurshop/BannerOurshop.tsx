import Button from '../../Button/Button';
import CountDownTimer from '../../CountDownTimer/CountDownTimer';
import styles from './style.module.scss';

export default function BannerOurshop() {
    const { container, title } = styles;
    const targetDate = '2026-12-31T23:59:59';

    return (
        <div className={container}>
            <CountDownTimer targetDate={targetDate} />
            <h2 className={title}>The classics make a comeback</h2>
            <Button content="Shop Now" />
        </div>
    );
}
