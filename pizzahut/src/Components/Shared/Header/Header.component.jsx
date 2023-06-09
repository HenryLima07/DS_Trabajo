import { useState } from "react";

//importing components
import AsideMenu from "./AsideMenu/AsideMenu.component";
import Menu from "./Menu/Menu.component";

//importing icons
//import banner from "../../../assets/imgs/logoEmpleos.png";

const sticky = 185;

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
                <Menu className={`${ positionSticky ? " fixed top-0 " : ""}`}/>
            </header>

            <article>
                <AsideMenu  className={`${positionSticky ? "fixed top-0 bg-pizzaMenuBG" : ""}`} />
            </article>
            
        </>
    );
}

export default Header;