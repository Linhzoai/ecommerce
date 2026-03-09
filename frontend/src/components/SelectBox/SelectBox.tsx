import {cn} from "../../libs/until.ts";
import styles from "./style.module.scss";

interface SelectBoxProps{
    options: {label: string, value: string}[];
    type:string;
    getValue: (value:string, type:string)=>void;
}



export default function SelectBox({options, type="",getValue}: SelectBoxProps){
    const {container} = styles;
    return(
        <select className={cn(container)} onChange={(e)=>getValue(e.target.value,type)}>
            {options.map((op)=>(
                <option key={op.value} value={op.value}>{op.label}</option>
            ))}
        </select>
    )
}