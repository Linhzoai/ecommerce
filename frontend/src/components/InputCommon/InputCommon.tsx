import { useState } from 'react';
import styles from './style.module.scss';
import { PiEyeSlash } from "react-icons/pi";
import { PiEye } from "react-icons/pi";
export default function InputCommon({label,type, err, ...props}: {label:string,type:string, err?:string}) {
    const { container, input,boxInput, eye,error} = styles;
    const isPassword = type==='password';
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={container}>
            <label htmlFor="email">{label}</label>
            <div className={boxInput}>
                <input {...props}   {...(isPassword ? { autoComplete: "current-password" } : {autoComplete: "email" })} type={isPassword ? showPassword ? 'text' : 'password' : type} className={input} />
                {isPassword && (    
                    <div className={eye} onClick={()=> setShowPassword(!showPassword)}>
                        {showPassword ? <PiEye size={16} /> : <PiEyeSlash size={16} />}
                    </div>
                )}
            </div>
            {!!err && <p className={error}>{err}</p>}
        </div>
    )
}