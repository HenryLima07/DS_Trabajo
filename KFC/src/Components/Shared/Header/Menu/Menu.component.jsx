
import { Link } from "react-router-dom";

const Menu = ({className})=>{
    
    return(
        <div className={` hidden bg-kfc-white text-black h-11 w-full lg:flex ${className} z-10`}>
            <ul className="w-full hidden lg:flex flex-row justify-around items-center font-bold text-lg">
                <Link to={"/"}>
                    <li><img src="#" alt="KFC icon"/></li>
                </Link>
                <Link to={"/"} className=" uppercase">
                    <li>Inicio</li>
                </Link>

                <Link to={"/registro"} className=" uppercase">
                    <li>Aplica por primera vez</li>
                </Link>

                <Link to={"/actualiza-perfil"} className=" uppercase">
                    <li>Actualiza tu perfil</li>
                </Link>

                <Link to={"/plazas"} className=" uppercase">
                    <li>Plazas disponibles</li>
                </Link>

                <Link to={"/contactos"} className=" uppercase" >
                    <li>Contáctanos</li>
                </Link>
            </ul>
        </div>

    )
}

export default Menu;