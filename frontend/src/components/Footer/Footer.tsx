import styles from './style.module.scss'

export default function Footer() {
    const {container, containerFooter, containerNav, desc, payment, copyright, nav} = styles
    const navBar = ["Home", "Elements", "Shop", "Blog", "About Us", "Contact Us", "Compare"];
    return (
        <div className={container}>
            <div className={containerFooter}>
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png" alt="logo" />
                <div className={containerNav}>
                    {navBar.map((item,index)=>(<a className={nav} href="#" key={index}>{item}</a>))}
                </div>
                <p className={desc}>Guaranteed safe ckeckout</p>
                <div className={payment}>
                    <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png" alt="payment" />
                </div>
                <p className={copyright}>Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.</p>
            </div>
        </div>
    )
}