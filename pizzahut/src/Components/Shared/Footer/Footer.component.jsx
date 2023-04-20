import { Link } from "react-router-dom";


const Footer = ({year = "2016"})=>{
    return(
        <footer>
        <div className="bg-pizzaGray w-full flex flex-col items-center">

            <div className="flex flex-row justify-center pt-1 pb-4 text-xs w-[80%] font-ronnia">
                <Link className="text-white p-2 w-[100%] text-center border-r-[1px] hover:bg-pizzaYellow hover:text-pizzaGray" to={"/"}>INICIO</Link>
                <Link className="text-white p-2 w-[100%] text-center border-r-[1px] hover:bg-pizzaYellow hover:text-pizzaGray" to={"/registro"}>APLICA POR PRIMERA VEZ</Link>
                <Link className="text-white p-2 w-[100%] text-center border-r-[1px] hover:bg-pizzaYellow hover:text-pizzaGray" to={"/actualiza-perfil"}>ACTUALIZA TU PERFIL</Link>
                <Link className="text-white p-2 w-[100%] text-center hover:bg-pizzaYellow hover:text-pizzaGray" to={"/contactos"}>CONTÁCTANOS</Link>
            </div>
            
            <div className="w-full bg-pizzaGray flex flex-col items-center text-white font-bebasN tracking-wide text-1">
                TRABAJOS EN CENTROAMÉRICA
            </div>
            <div className="w-full bg-pizzaGray flex flex-col items-center text-white text-xs font-bebasN tracking-wider">
                ©Pizza Hut, Copyright {year}. Todos los Derechos Reservados.
            </div>
        </div>
    </footer>
    )
}

export default Footer;
