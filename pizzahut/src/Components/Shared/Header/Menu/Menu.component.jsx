
import { Link } from "react-router-dom";

//import components
import LinkElement from "./LinkElement/LinkElement.component";

//import assets
import menu_icon from "../../../../assets/image/art06.svg";
import bg from "/img/bg.svg";

const Menu = ({className})=>{
    
    return(
        <div className={` bg-[url('/img/bg.svg')] hidden lg:flex flex-col h-17 text-white w-full items-center ${className} z-10 font-bebasN`}>
            <ul className="lg:flex flex-row justify-around items-center text-xl xl:text-2xl w-[90%] p-2 ">


                <LinkElement to={"/"}>inicio</LinkElement>
                <LinkElement to={"/registro"}>¿eres nuevo?</LinkElement>

                 <Link className=" w-[10%] min-w-[100px] m-3" to={"/"}><img src={menu_icon} alt="wendy logo"/></Link>

                <LinkElement to={"/actualiza-perfil"}>actualiza tu perfil</LinkElement>
                <LinkElement to={"/contactos"}>contáctanos</LinkElement>
            </ul>
            <div className=" bg-pizzaRed h-4 w-full"></div>

        </div>

    )
}

export default Menu;