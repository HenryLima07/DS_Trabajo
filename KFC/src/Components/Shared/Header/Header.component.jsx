import { useState } from "react";

//importing components
import AsideMenu from "./AsideMenu/AsideMenu.component";
import Menu from "./Menu/Menu.component";

//importing icons
// import banner from "../../../assets/img/wendy/Wendys.svg";
// import asideicon from "../../../assets/img/wendy/logo-wht.svg";

const bigSticky = 127;
const smallSticky = 59;

const Header = ()=>{
    const [positionBigSticky, setpositionBigSticky] = useState(false);
    const [positionSmallSticky, setpositionSmallSticky] = useState(false);
    
    const onScrollHandler = ()=>{
        if(window.pageYOffset >= bigSticky) return setpositionBigSticky(true);
        if(window.pageYOffset >= smallSticky) return setpositionSmallSticky(true);
        setpositionBigSticky(false);
        setpositionSmallSticky(false);
    }

    window.onscroll = () => onScrollHandler();

    return(
        <>
            <header className="flex flex-col items-center w-full">
                <Menu className={`${ positionBigSticky ? "fixed top-0": ""}`}/>
            </header>

            <article>
                <AsideMenu asideicon={"#"} className={`${ positionSmallSticky ? "fixed top-0" : ""}`} />
            </article>
        </>
    );
}

export default Header;