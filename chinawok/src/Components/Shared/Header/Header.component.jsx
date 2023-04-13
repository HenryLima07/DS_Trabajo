import { useState } from "react";

//importing components
import { Link } from "react-router-dom";
import AsideMenu from "./AsideMenu/AsideMenu.component";
import Menu from "./Menu/Menu.component";

//importing icons
import banner from "../../../assets/imgs/logoEmpleos.png";
//import asideicon from "../../../assets/img/wendy/logo-wht.svg";

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
                <Link className=" w-[12%] min-w-[100px] m-3" to={"/"}><img src={banner} alt="wendy logo"/></Link>
            </header>

            <article>
                <Menu className={`${ positionSticky ? "fixed top-0": ""}`}/>
                <AsideMenu  className={`${positionSticky ? "fixed top-0" : ""}`} />
            </article>
        </>
    );
}

export default Header;