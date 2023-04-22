import { Link } from "react-router-dom";

//assets
import icon from "/img/starbucks.svg";

const Menu = ({className})=>{
    
    return(
        <div className={` hidden bg-white text-black h-20 w-full lg:flex flex-col ${className} z-10 font-avenirMedium`}>
            <div className="flex flex-row">
                <Link to={"/"} className="px-6 h-full">
                    <img src={icon} alt="KFC icon" className=" pl-12 py-2"/>
                </Link>
                
                <ul className="w-full hidden lg:flex flex-row justify-center items-center font-bold text-lg">

                     <Link to={"/"} className=" flex justify-center items-center hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full">
                         <li >Inicio</li>
                     </Link>

                     <Link to={"/registro"} className=" flex justify-center items-center hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full">
                         <li >Aplica por primera vez</li>
                     </Link>

                     <Link to={"/actualiza-perfil"} className=" flex justify-center items-center hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full">
                         <li >Actualiza tu perfil</li>
                     </Link>

                     <Link to={"/plazas"} className=" flex justify-center items-center hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full">
                         <li >Plazas disponibles</li>
                     </Link>

                     <Link to={"/contactos"} className=" flex justify-center items-center hover:bg-starbucks-Black hover:text-white uppercase px-6 h-full" >
                         <li >Contáctanos</li>
                     </Link>
                 </ul>
            </div>

            <div className="w-full bg-starbucks-Black h-6">
            </div>
        </div>

    )
}

export default Menu;