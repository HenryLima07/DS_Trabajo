import { Link } from "react-router-dom";

import classes from "./AsideMenu.module.scss";

import AsideCloseIcon from "../../../../assets/img/wendy/close-w.svg";


const AsideMenu=({asideicon})=>{

    return(

        <>
        <div id="hamburger" className="w-full">
            <a className="flex flex-row w-full p-4 bg-black lg:hidden items-center">
                <div className="space-y-1.5">
                    <span className="block w-8 h-0.5 bg-white rounded-lg"></span>
                    <span className="block w-8 h-0.5 bg-white rounded-lg"></span>
                    <span className="block w-8 h-0.5 bg-white rounded-lg"></span>
                </div>

                <div className="pl-4 text-lg text-white font-bold">Menu</div>
            </a>
        </div>
        <aside className={`${classes["aside-menu"]} transition-all duration-300 w-80 h-full fixed -left-80  top-0 bottom-0 shadow-md shadow-black z-[1200] translate-x-80`}>
            <div className="bg-wendys-background flex flex-col">

                <div className="flex flex-row h-30 justify-between items-start pt-4 px-6">
                    <img src={asideicon} alt="Wendy logo" className="w-1/3"/>

                    <div className="w-1/4 flex flex-col items-center">
                        <img src={AsideCloseIcon} alt="close logo" className="w-8" />
                        <h2 className="font-simple-wendys text-white">CLOSE</h2>
                    </div>

                </div>

                <h2 className="font-wendys-default px-2 py-4 w-full text-3xl text-justify text-white"> WENDY'S </h2>
            
            </div>

            <ul className="bg-white min-h-full flex flex-col items-start p-4 text-lg text-wendys-blue font-bold">

                <Link to={"/"} className="m-3"> <li>Inicio</li></Link>
                <Link to={"/"} className="m-3"> <li>Aplica por primera vez</li></Link>
                <Link to={"/"} className="m-3"> <li>Actualiza tu perfil</li> </Link>
                <Link to={"/"} className="m-3"> <li>Plazas disponibles</li></Link>
                <Link to={"/"} className="m-3"> <li>Contactanos</li></Link>

            </ul>
        </aside>
        </>
    )
}
//1024
export default AsideMenu;