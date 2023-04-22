
import { Link } from "react-router-dom";

const Menu = ({className})=>{
    
    return(
        <div className={` hidden bg-white text-black h-16 w-full lg:flex ${className} z-10`}>
            <img src="#" alt="KFC icon" className=" pl-12 py-2"/>
            <ul className="w-full hidden lg:flex flex-row justify-center items-center font-bold text-lg">
                <Link to={"/"} className=" hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full">
                    <li className=" pt-4">Inicio</li>
                </Link>

                <Link to={"/registro"} className=" hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full">
                    <li className=" xl:pt-4">Aplica por primera vez</li>
                </Link>

                <Link to={"/actualiza-perfil"} className=" hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full">
                    <li className="xl:pt-4">Actualiza tu perfil</li>
                </Link>

                <Link to={"/plazas"} className=" hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full">
                    <li className="xl:pt-4">Plazas disponibles</li>
                </Link>

                <Link to={"/contactos"} className=" hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full" >
                    <li className="xl:pt-4">Contáctanos</li>
                </Link>
            </ul>
        </div>

    )
}

export default Menu;