import { Link } from "react-router-dom";

//assets
import art from "../../../assets/img/art07.svg";
import registro_button from "../../../assets/img/register.svg";
import actualiza_button from "../../../assets/img/edit.svg";

const TalentoKFCContainer = ()=>{
    return(
        <section className=" w-full lg:w-[90%] self-center flex flex-col bg-kfc-red-buttons relative">
            <img src={art} alt="Empleados de KFC" className="w-full"/>
            <div className=" flex flex-row self-center justify-between absolute bottom-0  md:bottom-1 xl:bottom-4 w-[90%]">
                <Link to={"/registro"}>
                    <img src={registro_button} alt="botón para registrar" className=" w-24 sm:w-36 md:w-48 lg:w-60 2xl:w-80 " />
                </Link>
                <Link to={"/actualiza-perfil"}>
                    <img src={actualiza_button} alt="botón para actualizar perfil"  className=" w-24 sm:w-36 md:w-48 lg:w-60 2xl:w-80 "/>
                </Link>
            </div>
        </section>
    )
}

export default TalentoKFCContainer;