
import styles from './style.module.scss';
import { dataInfo } from './contains';
export default function Info() {
    const { container, containerBox, containerContent, title, content } = styles;
    return (
        <div className={container}>
            {dataInfo.map((item, index) => (
                <div key={index} className={containerBox}>
                    <item.icon size={40} color="rgb(112, 112, 112)" />
                    <div className={containerContent}>
                        <h3 className={title}>{item.title}</h3>
                        <p className={content}>{item.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
