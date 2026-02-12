import styles from './style.module.scss'
import Button from '@components/Button/Button'
export default function (){
    const {container, banner_title, banner_desc} = styles;
    return(
        <div className={container}>
            <h1 className={banner_title}>XStore Marseille04 Demo</h1>
            <p className={banner_desc}>Make yours celebrations even more special this years with beautiful.</p>
            <Button content="Go to shop"/>
        </div>
    )
}