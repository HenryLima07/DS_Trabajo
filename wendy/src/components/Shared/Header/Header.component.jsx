import { useState } from "react";

//importing components
import AsideMenu from "./AsideMenu/AsideMenu.component";
import Menu from "./Menu/Menu.component";

//importing icons
import banner from "../../../assets/img/wendy/Wendys.svg";
import asideicon from "../../../assets/img/wendy/logo-wht.svg";

const sticky = 160;

const Header = ()=>{
    const [positionSticky, setPositionSticky] = useState(false);
    
    const onScrollHandler = ()=>{
        if(window.pageYOffset >= sticky) return setPositionSticky(true);
        setPositionSticky(false);
    }

    window.onscroll = () => onScrollHandler();

    return(
        <>
            <header className="flex flex-col items-center w-full">
                <img src={banner} alt="wendy logo" className="pt-8 w-1/2 sm:w-1/4"/>
                <h2 className="font-bold text-2xl -mt-2 mb-5">Empleos</h2>
            </header>

            <article>
                <Menu className={`${ positionSticky ? "fixed top-0": ""}`}/>
                <AsideMenu asideicon={asideicon} className={`${positionSticky ? "fixed top-0" : ""}`} />
            </article>
        </>
    );
}

export default Header;