import {useState, useEffect} from "react";
import useScrollHandling from "./useScrollHandling";

const useTranslateImg = () =>{
    const [translateX, setTranslateX] = useState<number>(0);
    const {scrollStatus, scrollPosition}= useScrollHandling();

    const handleTranslateX = () =>{
        if(scrollStatus==="down" && scrollPosition >= 1650){
            setTranslateX((prev)=> Math.min(prev+0.1, 60));
        }
        if(scrollStatus==="up"){
            setTranslateX((prev)=> Math.max(prev - 0.1, 0));
        }
    }
    useEffect(()=>{
        handleTranslateX();
    }, [scrollPosition]);
    return {
        translateX,
    }
}

export default useTranslateImg;