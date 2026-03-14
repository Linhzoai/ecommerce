import Button from '@/components/Button/Button';
import styles from '../style.module.scss';
import { GoStarFill } from "react-icons/go";
import { cn } from '@/libs/until';
import { useState } from 'react';
interface ReviewProps {
    isSelected: boolean;
}
export default function Review({ isSelected }: ReviewProps) {
    const { content, content_inner, active, container_title, container_rating, container_input, container_checkbox,active_star } = styles;
    const [ratingStar, setRatingStar] = useState<number>(0);
    const handleRatingStar = (star: number) => {
        if(ratingStar === star) {
            setRatingStar(0);
        } else {
            setRatingStar(star);
        }
    }
    return (
        <div className={cn(content, isSelected && active)}>
            <div className={cn(content_inner, isSelected && active)}>
                <div style={{marginBottom: '45px'}} className={container_title}>
                    <div>REVIEWS</div>
                    <p>Không có bài review nào.</p>
                </div>
                <div className={container_title}>
                    <div>Hãy là người đầu tiên đánh giá “10K Yellow Gold”</div>
                    <p>Địa chỉ email của bạn sẽ không được công bố. Các trường bắt buộc được đánh dấu </p>
                </div>

                <div className={container_rating}>
                    <p>Your rating <span style={{color: 'red'}}>*</span></p>
                    <div>
                        <span className={cn(ratingStar===1 && active_star)} onClick={() => handleRatingStar(1)}>{[...Array(1)].map((_, i) => <GoStarFill key={i} />)}</span>
                        <span className={cn(ratingStar===2 && active_star)} onClick={() => handleRatingStar(2)}>{[...Array(2)].map((_, i) => <GoStarFill key={i} />)}</span>
                        <span className={cn(ratingStar===3 && active_star)} onClick={() => handleRatingStar(3)}>{[...Array(3)].map((_, i) => <GoStarFill key={i} />)}</span>
                        <span className={cn(ratingStar===4 && active_star)} onClick={() => handleRatingStar(4)}>{[...Array(4)].map((_, i) => <GoStarFill key={i} />)}</span>
                        <span className={cn(ratingStar===5 && active_star)} onClick={() => handleRatingStar(5)}>{[...Array(5)].map((_, i) => <GoStarFill key={i} />)}</span>
                    </div>
                </div>

                <div className={container_input}>
                    <label htmlFor="review">Đánh giá của bạn <span style={{color: 'red'}}>*</span></label>
                    <textarea name="review" id="review" cols={30} rows={10}></textarea>
                </div>

                <div className={container_input}>
                    <label htmlFor="name">Tên <span style={{color: 'red'}}>*</span></label>
                    <input type="text" name="name" id="name" />
                </div>

                <div className={container_input}>
                    <label htmlFor="email">Email <span style={{color: 'red'}}>*</span></label>
                    <input type="email" name="email" id="email" />
                </div>

                <div className={container_checkbox}>
                    <input type="checkbox" name="checkbox" id="checkbox" />
                    <label htmlFor="checkbox">
                        Lưu tên, email và trang web của tôi trong trình duyệt này cho lần bình luận tiếp theo.
                    </label>
                </div>

                <Button content="Gửi" />
            </div>
        </div>
    );
}
