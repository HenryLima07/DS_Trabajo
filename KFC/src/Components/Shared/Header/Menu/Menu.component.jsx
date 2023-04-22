
import { Link } from "react-router-dom";

//importing assets
import icon from "../../../../assets/img/kfc.svg"

import LinkElement from "./LinkElement/LinkElement.component";

const Menu = ({className})=>{
    
    return(
        <div className={` font-ronnia hidden bg-kfc-white text-black h-auto w-full lg:flex flex-col items-center ${className} z-10`}>
            <ul className="w-[90%] hidden lg:flex flex-row justify-around items-center font-bold text-lg p-3">
                <Link to={"/"}>
                    <li><img src={icon} alt="KFC icon" className=" w-48" /></li>
                </Link>
                
                <LinkElement to={"/"}> Inicio </LinkElement>
                <LinkElement to={"/registro"}> Aplica por primera vez </LinkElement>
                <LinkElement to={"/actualiza-perfil"}> Actualiza tu perfil </LinkElement>
                <LinkElement to={"/plazas"}> Plazas disponibles </LinkElement>
                <LinkElement to={"/contactos"}> Contáctanos </LinkElement>
            </ul>
            <div className={`w-full bg-kfc-red h-4`}></div>
        </div>

    )
}

export default Menu;