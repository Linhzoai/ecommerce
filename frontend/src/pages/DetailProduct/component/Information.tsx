import styles from '../style.module.scss';
import { cn } from '@/libs/until';
interface InformationProps {
    isSelected: boolean;
}
export default function Information({isSelected}: InformationProps){
    const {content, content_inner, item, item_title, item_value, active} = styles;
    const dataInfo = [
        { title: 'Kích thước', value: 'L, M, S' },
        { title: 'Chất liệu', value: '100% Cotton' },
        { title: 'Màu sắc', value: 'Đen, Trắng, Xanh' }
    ]
    return(
        <div className={cn(content, isSelected && active)}> 
            <div className={cn(content_inner, isSelected && active)}>
                {dataInfo.map(({title, value}, index) => (
                    <div className={item} key={index}>
                        <span className={item_title}>{title}</span>
                        <span className={item_value}>{value}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}