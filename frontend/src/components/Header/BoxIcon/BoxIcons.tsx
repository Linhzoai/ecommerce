import styles from '../style.module.scss';

interface BoxIconsProps {
    href: string;
    icon: React.ReactNode;
}

export default function BoxIcons({ href, icon }: BoxIconsProps) {
    const { boxIcon } = styles;
    
    return (
        <div className={boxIcon}>
            <a href={href}>
                {icon}
            </a>
        </div>
    );
}
