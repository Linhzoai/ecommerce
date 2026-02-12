import { useEffect, useRef, useState } from "react";

    
const useScrollHandling = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [scrollStatus, setScrollStatus] = useState<"up" | "down" | "">("");
    const prevScrollPosition = useRef<number>(0);
    function HandleTrackingScroll(){
        const currentPosition = window.pageYOffset;
        if(currentPosition > prevScrollPosition.current){
            setScrollStatus("down");
        }else{
            setScrollStatus("up");
        }
        prevScrollPosition.current = currentPosition;
        setScrollPosition(currentPosition);
    }
    useEffect(() => {
        window.addEventListener("scroll", HandleTrackingScroll);
        return () => {
            window.removeEventListener("scroll", HandleTrackingScroll);
        };
    }, []);

    return{
        scrollPosition,
        scrollStatus,
        prevScrollPosition,
    }
 }
export default useScrollHandling;