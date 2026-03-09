import Footer from "@/components/Footer/Footer"
import Header from "@/components/Header/Header"
import style from "./style.module.scss";
import Step from "./components/Step/Step";
import Content from "./components/Content/Content";
export default function Cart(){
    const {container} = style;
    return(
        <>
            <Header/>
            <div className={container}>
                <Step/>
                <Content/>
            </div>
            <Footer/>
        </>
    )
}