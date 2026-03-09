import style from "./style.module.scss";
import {cn} from "@/libs/until.ts"
interface Props{
    number: number,
    content: string,
    active?: boolean,
}
export default function ({number, content, active = false}: Props) {
    const {containerStep, stepNumber,stepText,active:activeStyle} = style;
    return (
        <div className={containerStep}>
            <div className={cn(stepNumber, active && activeStyle)}>{number}</div>
            <div className={cn(stepText, active && activeStyle)}>{content}</div>
        </div>
    );
}
