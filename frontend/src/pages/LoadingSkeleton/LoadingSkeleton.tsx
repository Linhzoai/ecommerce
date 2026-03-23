import styles from './style.module.scss';

export default function LoadingSkeleton() {
    return (
        <div className={styles.container}>
            {/* Floating particles */}
            <div className={styles.particles}>
                {Array.from({ length: 10 }).map((_, i) => (
                    <div key={i} className={styles.particle} />
                ))}
            </div>

            {/* Server icon with ring animation */}
            <div className={styles.serverIcon}>
                <div className={styles.ringContainer}>
                    <div className={styles.ring} />
                    <div className={styles.ring} />
                    <div className={styles.ring} />
                </div>
                <div className={styles.serverBox}>
                    <div className={styles.serverLine} />
                    <div className={styles.serverLine} />
                    <div className={styles.serverLine} />
                    <div className={styles.serverDot} />
                </div>
            </div>

            {/* Spinner */}
            <div className={styles.spinner} />

            {/* Text content */}
            <div className={styles.textContainer}>
                <div className={styles.title}>
                    Đang đánh thức server, vui lòng chờ trong giây lát
                    <span className={styles.dots}>
                        <span />
                        <span />
                        <span />
                    </span>
                </div>
                <div className={styles.subtitle}>
                    Server đang khởi động sau thời gian không hoạt động
                </div>
            </div>

            {/* Progress bar */}
            <div className={styles.progressBar}>
                <div className={styles.progressFill} />
            </div>

            {/* Bottom tip */}
            <div className={styles.tipBox}>
                <div className={styles.tipText}>
                    💡 <span>Tip:</span> Lần truy cập đầu tiên có thể mất 30-60 giây
                </div>
            </div>
        </div>
    );
}