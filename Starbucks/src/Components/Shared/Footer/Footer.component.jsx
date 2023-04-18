import { Link } from "react-router-dom";


const Footer = ({year = "2016"})=>{
    return(
        <footer>

            <div className="bg-black h-8">
            </div>

        <div className="bg-starbucks-Green text-white h-32">

            <div className="w-full flex flex-row justify-center text-[8px] sm:text-[10px] pt-1">
                <Link className="text-white p-2 border-r border-r-white" to={"/"}>INICIO</Link>
                <Link className="text-white p-2 border-r border-r-white" to={"/registro"}>APLICA POR PRIMERA VEZ</Link>
                <Link className="text-white p-2 border-r border-r-white" to={"/actualiza-perfil"}>ACTUALIZA TU PERFIL</Link>
                <Link className="text-white p-2 border-r border-r-white" to={"/plazas"}>EMPLEOS</Link>
                <Link className="text-white p-2" to={"/contactos"}>CONTÁCTANOS</Link>
            </div>

            <div className="w-full">
                <p className="text-center text-[10px] sm:text-[14px]">
                    {
                        <>
                            <br/>
                            ©Starbucks,  Copyright {year}. Todos los Derechos Reservados.
                        </>
                    }
                </p>
            </div>
        </div>
    </footer>
    )
}

export default Footer;
