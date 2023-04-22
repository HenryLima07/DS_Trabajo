import { Link } from "react-router-dom";


const Footer = ({year = "2016"})=>{
    return(
        <footer className=" font-ronnia">
        <div className="bg-starbucks-Green text-white h-32">

            <div className="w-full flex flex-row justify-center text-[10px] sm:text-[15px] pt-1">
                <Link className="text-white p-2 border-r border-r-white" to={"/"}>INICIO</Link>
                <Link className="text-white p-2 border-r border-r-white" to={"/registro"}>APLICA POR PRIMERA VEZ</Link>
                <Link className="text-white p-2 border-r border-r-white" to={"/actualiza-perfil"}>ACTUALIZA TU PERFIL</Link>
                <Link className="text-white p-2 border-r border-r-white" to={"/plazas"}>EMPLEOS</Link>
                <Link className="text-white p-2" to={"/contactos"}>CONTÁCTANOS</Link>
            </div>

            <div className="w-full">
                <br/>
                <p className="text-center text-[10px] sm:text-[14px]">
                    ©Starbucks,  Copyright {year}. Todos los Derechos Reservados.
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
