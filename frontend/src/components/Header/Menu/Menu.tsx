import { useSideBarStore } from "@/stores/useSideBarStore";
interface MenuProps {
  data: Array<{content: string; href: string}>; 
}

export default function Menu({data}: MenuProps){
    const {handleOpenSideBar} = useSideBarStore();

    const handleOpenSideBarLogin = (type: string) => {
        if(type === "Sign In"){
            handleOpenSideBar('login');
        }
    }

    return(
        data.map((item, index) => (
            <a style={{textDecoration: 'none', color: 'black'}} href={item.href} key={index} onClick={()=> handleOpenSideBarLogin(item.content)}>
                <span>{item.content}</span>
            </a>
        ))
    )
}