import { Link } from "react-router-dom";


const Footer = ({year = "2023"})=>{
    return(
        <footer>
        <div className="bg-black w-full flex flex-col items-center">

            <div className="flex flex-row justify-center py-2 px-0 text-xs w-[80%]">
                <Link className="text-white p-2 w-[100%] text-center border-r-[1px]" to={"/"}>INICIO</Link>
                <Link className="text-white p-2 w-[100%] text-center border-r-[1px]" to={"/registro"}>APLICA POR PRIMERA VEZ</Link>
                <Link className="text-white p-2 w-[100%] text-center border-r-[1px]" to={"/actualiza-perfil"}>ACTUALIZA TU PERFIL</Link>
                <Link className="text-white p-2 w-[100%] text-center border-r-[1px]" to={"/contactos"}>CONTÁCTANOS</Link>
            </div>
            <div class="w-full bg-black flex flex-col items-center text-white text-xs">
                TRABAJOS EN CENTROAMÉRICA
            </div>
            <div class="w-full bg-black flex flex-col items-center text-white text-xs">
                ©Chinawok, Copyright {year}. Todos los Derechos Reservados.
            </div>
        </div>
    </footer>
    )
}

export default Footer;
