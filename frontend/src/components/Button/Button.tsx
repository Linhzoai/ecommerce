import Loading from '../Loading/Loading';
import styles from './style.module.scss';
import { cn } from '@/libs/until';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    content: string;
    isPrimary?: boolean;
    style?: React.CSSProperties;
    isSmall?: boolean;
    loadingBtn?:boolean;
}
export default function Button({ content, isPrimary = true, style, isSmall, loadingBtn, ...props }: ButtonProps) {
    const { btn, primaryBtn, secondaryBtn, small } = styles;
    return <button style={style} className={cn(btn, isPrimary ? primaryBtn : secondaryBtn, isSmall ? small : '')} {...props}>
        {loadingBtn && <Loading />}
        {!loadingBtn && content}
    </button>;
}
