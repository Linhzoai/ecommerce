import { useEffect, useState } from 'react';
import styles from './style.module.scss';
export default function CountDownTimer({ targetDate }: { targetDate: string }) {
    const {container, timer, time} = styles;
    type TimeLeft = { Days: number; Hours: number; Mins: number; Secs: number; };
    const [timeLeft, setTimeLeft] = useState<TimeLeft>({ Days: 0, Hours: 0, Mins: 0, Secs: 0 });
    // tính toán thời gian còn lại
    const caculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = { Days: 0, Hours: 0, Mins: 0, Secs: 0 };

        if (difference > 0) {
            timeLeft = {
                Days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                Hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                Mins: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                Secs: Math.floor((difference % (1000 * 60)) / 1000)
            };
        }
        return timeLeft;
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(caculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    },);
    // định dạng số
    const formatNumber = (number: number) => {
        return String(number).padStart(2, '0');
    };
    // tạo component đếm ngược
    const timerComponent: React.ReactNode[] = [];   
    (Object.keys(timeLeft) as Array<keyof TimeLeft>).forEach((interval) => {
        timerComponent.push(
            <span key={interval} className={timer}>
                {formatNumber(timeLeft[interval])} <span className={time}>{interval}</span>
            </span>
        )
    });
    return <div className={container}>{timerComponent}</div>;
}
