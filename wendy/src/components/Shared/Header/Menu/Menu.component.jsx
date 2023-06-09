
import { Link } from "react-router-dom";

const Menu = ({className})=>{
    
    return(
        <div className={` hidden bg-black text-white h-11 w-full lg:flex ${className} z-10`}>
            <ul className="w-full hidden lg:flex flex-row justify-around items-center font-bold text-lg">
                <Link to={"/"}>
                    <li>Inicio</li>
                </Link>

                <Link to={"/registro"}>
                    <li>Aplica por primera vez</li>
                </Link>

                <Link to={"/actualiza-perfil"}>
                    <li>Actualiza tu perfil</li>
                </Link>

                <Link to={"/plazas"}>
                    <li>Plazas disponibles</li>
                </Link>

                <Link to={"/contactos"} >
                    <li>Contactos</li>
                </Link>
            </ul>
        </div>

    )
}

export default Menu;