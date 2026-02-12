import styles from './style.module.scss';
import { cn } from '@/libs/until';
interface ButtonProps {
    content: string;
    isPrimary?: boolean;
    style?: React.CSSProperties;
    isSmall?: boolean;
}
export default function Button({ content, isPrimary = true, style, isSmall }: ButtonProps) {
    const { btn, primaryBtn, secondaryBtn, small } = styles;
    return <button style={style} className={cn(btn, isPrimary ? primaryBtn : secondaryBtn, isSmall ? small : '')}>{content}</button>;
}
