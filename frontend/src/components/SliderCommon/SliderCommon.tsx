import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import style from './style.module.scss';
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";
export default function SliderCommon({ children }: { children: React.ReactNode }) {
    function NextArrow({ onClick }: any) {
        return (
            <button onClick={onClick} className={style.next}>
                <GrNext/>
            </button>
        );
    }
    function PrevArrow({ onClick }: any) {
        return (
            <button onClick={onClick} className={style.prev}>
                <GrPrevious/>
            </button>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
    };
    return <Slider {...settings} className={style.container}>{children}</Slider>;
}
