import styles from './style.module.scss';

export default function MainLayout({ children }: { children: React.ReactNode }) {
    const {warpLayout, container} = styles;
    return (
        <div className={warpLayout}>
            <div className={container}>{children}</div>
        </div>
    );
}
