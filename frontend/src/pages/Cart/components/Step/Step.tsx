import Stepper from './Stepper';
import styles from './style.module.scss';
export default function Step() {
    const { container,line,textNoti,boxStep } = styles;
    return (
        <div className={container}>
        <div className={boxStep}>
            <Stepper number={1} content="Shopping Cart" active/>
            <div className={line}></div>
            <Stepper number={2} content="Checkout"/>
            <div className={line}></div>
            <Stepper number={3} content="Order Status"/>
        </div>
        <div className={textNoti}>
            You are out of time! Checkout now to avoid losing your order?
        </div>
        </div>
    );
}
