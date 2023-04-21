import { Link } from "react-router-dom";


const Footer = ({year = "2016"})=>{
    return(
        <footer>

            <div className="bg-kfc-red h-8">
            </div>

        <div className="bg-kfc-red text-white h-32 font-ronnia">

            <div className="w-full flex flex-row justify-center text-[10px] sm:text-[13px] pt-1">
                <Link className="text-white p-2 border-r border-r-white " to={"/"}>INICIO</Link>
                <Link className="text-white p-2 border-r border-r-white " to={"/registro"}>APLICA POR PRIMERA VEZ</Link>
                <Link className="text-white p-2 border-r border-r-white " to={"/actualiza-perfil"}>ACTUALIZA TU PERFIL</Link>
                <Link className="text-white p-2 border-r border-r-white " to={"/plazas"}>EMPLEOS</Link>
                <Link className="text-white p-2 " to={"/contactos"}>CONTÁCTANOS</Link>
            </div>

            <div className="w-full">
                <br/>
                <p className=" font-ronnia text-center text-[10px] sm:text-[12px]">
                    TRABAJOS EN CENTROAMÉRICA
                </p>
                <p className=" font-ronnia text-center text-[10px] sm:text-[11px]">
                    ©KFC, Copyright {year}. Todos los Derechos Reservados.
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
