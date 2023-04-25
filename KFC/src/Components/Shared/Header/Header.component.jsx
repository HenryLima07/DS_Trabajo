import { useState } from "react";

//importing components
import AsideMenu from "./AsideMenu/AsideMenu.component";
import Menu from "./Menu/Menu.component";

const bigSticky = 127;

const Header = ({smallSticky = 10})=>{
    const [positionBigSticky, setpositionBigSticky] = useState(false);
    const [positionSmallSticky, setpositionSmallSticky] = useState(false);
    
    const onScrollHandler = ()=>{
        if(window.pageYOffset > bigSticky) return setpositionBigSticky(true);
        if(window.pageYOffset > smallSticky) return setpositionSmallSticky(true);
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