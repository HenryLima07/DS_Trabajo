
import { Link } from "react-router-dom";

const Menu = ({className})=>{
    
    return(
        <div className={` hidden bg-black text-white w-full lg:flex justify-center ${className} z-10`}>
            <ul className="hidden lg:flex flex-row justify-around items-center text-xl xl:text-2xl w-[90%]">

                <Link to={"/"}>
                    <li>Inicio</li>
                </Link>

                <Link to={"/registro"}>
                    <li>¿Eres nuevo?</li>
                </Link>

{/*                 <Link className=" w-[12%] min-w-[100px] m-3" to={"/"}><img src={"#"} alt="wendy logo"/></Link>
 */}
                <Link to={"/actualiza-perfil"}>
                    <li>Actualiza tu perfil</li>
                </Link>

                <Link to={"/contactos"} >
                    <li>Contáctanos</li>
                </Link>
            </ul>
        </div>

    )
}

export default Menu;