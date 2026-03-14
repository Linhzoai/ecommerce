import styles from './style.module.scss';
import { RiArrowDownWideFill } from 'react-icons/ri';
import { TfiLayoutLineSolid } from 'react-icons/tfi';
import { cn } from '@/libs/until';

interface DropMenuProps {
    titles: string;
    contents: React.ReactNode;
    isSelected: boolean;
    onClick: () => void;
}

export default function DropMenu({ titles, contents, isSelected, onClick }: DropMenuProps) {
    const { container, title, content, content_inner, active } = styles;
    const handleMenuClick = () => {
        onClick();
    };
    return (
        <div className={container}>
            <div className={cn(title, isSelected && active)} onClick={handleMenuClick}>
                <span>{!isSelected ? <RiArrowDownWideFill /> : <TfiLayoutLineSolid />}</span>
                {titles}
            </div>
            <div className={cn(content, isSelected && active)}>
                <div className={content_inner}>{contents}</div>
            </div>
        </div>
    );
}
