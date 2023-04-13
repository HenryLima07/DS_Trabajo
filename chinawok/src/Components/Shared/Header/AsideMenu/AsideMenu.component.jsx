import { Link } from "react-router-dom";

import AsideCloseIcon from "../../../../assets/imgs/close.png";
import chinawokIcon from "../../../../assets/imgs/logoEmpleos.png";
import { useState } from "react";


const AsideMenu=({className})=>{

    const [toogleAsideMenu, setToogleAsideMenu] = useState(false);

    //function controls toogle aside menu
    const setToogleAsideMenuHandler = (setState)=>{
        setToogleAsideMenu(setState);
    }
    return(

        <>
        <div id="hamburger" className={`w-full z-10 ${className}`}>
            <a className="flex flex-row w-full p-4 bg-black lg:hidden items-center">
                <div className="space-y-1.5 cursor-pointer" onClick={()=> setToogleAsideMenuHandler(true)}>
                    <span className="block w-8 h-0.5 bg-white rounded-lg"></span>
                    <span className="block w-8 h-0.5 bg-white rounded-lg"></span>
                    <span className="block w-8 h-0.5 bg-white rounded-lg"></span>
                </div>

                <div className="pl-4 text-lg text-white font-bold">Menu</div>
            </a>
        </div>

        {/* set class to toogle it */}
        <aside className={`transition-all duration-300 w-80 h-full fixed -left-80 top-0 bottom-0 shadow-md shadow-black z-[1200] ${toogleAsideMenu ? "translate-x-80": " invisible"}`}>
            <div className="bg-chinaGreen flex flex-col">

                <div className="flex flex-row h-30 justify-between items-start pt-4 px-6">
                    <img src={chinawokIcon} alt="chinawok logo" className="w-1/3"/>

                    <div className="w-1/4 flex flex-col items-center cursor-pointer" onClick={()=>setToogleAsideMenuHandler(false)}>
                        <img src={AsideCloseIcon} alt="close logo" className="w-8" />
                        <h2 className="text-white">CLOSE</h2>
                    </div>

                </div>

                <h2 className=" font-wendysFont px-2 py-4 w-full text-3xl text-justify text-white uppercase"> Chinawok Empleos </h2>
            
            </div>

            <ul className="bg-white min-h-full flex flex-col items-start p-4 text-lg text-wendys-blue font-bold text-chinaGreen">

                <Link to={"/"} className="m-3"> <li>Inicio</li></Link>
                <Link to={"/registro"} className="m-3"> <li>Aplica por primera vez</li></Link>
                <Link to={"/actualiza-perfil"} className="m-3"> <li>Actualiza tu perfil</li> </Link>
                <Link to={"/contactos"} className="m-3"> <li>Contactos</li></Link>

            </ul>
        </aside>
        </>
    )
}

export default AsideMenu;