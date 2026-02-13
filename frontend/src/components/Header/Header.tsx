import BoxIcons from './Menu/BoxIcon/BoxIcons';
import { dataBoxIcon, dataMenu } from './constant';
import Menu from './Menu/Menu';
import styles from './style.module.scss';
import { CiHeart } from 'react-icons/ci';
import { PiShoppingCartLight } from 'react-icons/pi';
import { RefreshCw } from 'lucide-react';
import useScrollHandling from '@/hooks/useScrollHandling';
import { cn } from '@/libs/until.ts';
import { useEffect, useState } from 'react';
import { useSideBarStore } from '@/stores/useSideBarStore';
export default function Header() {
    const {
        container,
        containerBoxAction,
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        containerLogo,
        fixedHeader,
        absoluteHeader,
        boxCompare,
        total
    } = styles;
    const { scrollPosition } = useScrollHandling();
    const [isFixed, setIsFixed] = useState(false);
    const { handleOpenSideBar, listCompare } = useSideBarStore();
    useEffect(() => {
        setIsFixed(scrollPosition > 80);
    }, [scrollPosition]);
    return (
        <div className={cn(container, isFixed ? fixedHeader : absoluteHeader)}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.map((item, index) => (
                            <BoxIcons
                                key={index}
                                href={item.href}
                                icon={<item.icon size={15} color="white" />}
                            ></BoxIcons>
                        ))}
                    </div>
                    <div className={containerMenu}>
                        <Menu data={dataMenu.slice(0, 3)}></Menu>
                    </div>
                </div>
                <div className={containerLogo}>
                    <img
                        src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Logo-retina.png"
                        alt="logo"
                    />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        <Menu data={dataMenu.slice(3, 6)}></Menu>
                    </div>
                    <div className={containerBoxIcon}>
                        <div className={containerBoxAction}>
                            <div className={boxCompare}>
                                {listCompare.length > 0 && <span className={total}>{listCompare.length}</span>}
                                <RefreshCw size={24} strokeWidth={1.5} onClick={() => handleOpenSideBar('reload')} />
                            </div>
                            <div className={boxCompare}>
                                {listCompare.length > 0 && <span className={total}>{listCompare.length}</span>}
                                <CiHeart size={26} onClick={() => handleOpenSideBar('wishlist')} />
                            </div>
                            <div className={boxCompare}>
                                <PiShoppingCartLight size={26} onClick={() => handleOpenSideBar('cart')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
