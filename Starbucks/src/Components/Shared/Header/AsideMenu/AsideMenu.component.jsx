import { Link } from "react-router-dom";
import { useState } from "react";

//assets
import icon from "/img/starbucks.svg";
import closeIcon from "../../../../assets/image/close.png";

const AsideMenu=({className})=>{

    const [toogleAsideMenu, setToogleAsideMenu] = useState(false);

    //function controls toogle aside menu
    const setToogleAsideMenuHandler = (setState)=>{
        setToogleAsideMenu(setState);
    }
    return(

        <>
        <div id="hamburger" className={`w-full z-10 ${className} font-avenirMedium lg:hidden`}>
            <a className="flex flex-row w-full p-4 bg-white items-center">
                <div className="space-y-1.5 cursor-pointer" onClick={()=> setToogleAsideMenuHandler(true)}>
                    <span className="block w-8 h-0.5 bg-starbucks-Black rounded-lg"></span>
                    <span className="block w-8 h-0.5 bg-starbucks-Black rounded-lg"></span>
                    <span className="block w-8 h-0.5 bg-starbucks-Black rounded-lg"></span>
                </div>

                <div className="pl-4 text-lg text-starbucks-Black font-bold">Menu</div>
            </a>
            <div className="w-full bg-starbucks-Black h-4">
            </div>
        </div>

        {/* set class to toogle it */}
        <aside className={`transition-all duration-300 w-80 h-full fixed -left-80 top-0 bottom-0 shadow-md shadow-black z-[1200] ${toogleAsideMenu ? "translate-x-80": " invisible"}`}>
            <div className=" font-avenirMedium bg-starbucks-Green flex flex-col">

                <div className="flex flex-row h-30 justify-between items-start pt-4 px-6">
                    <img src={icon} alt="Starbucks Logo" className="w-1/3"/>

                    <div className="w-1/4 flex flex-col items-center cursor-pointer" onClick={()=>setToogleAsideMenuHandler(false)}>
                        <img src={closeIcon} alt="close logo" className="w-8" />
                        <h2 className=" text-white">CLOSE</h2>
                    </div>

                </div>

                <h2 className=" px-2 py-4 w-full text-3xl text-justify text-white uppercase"> starbucks empleos </h2>
            
            </div>

            <ul className="bg-white min-h-full flex flex-col items-start p-4 text-lg text-starbucks-Black font-bold">

                <Link to={"/"} className="m-3 uppercase hover:text-starbucks-Green transition-colors"> <li>Inicio</li></Link>
                <Link to={"/registro"} className="m-3 uppercase hover:text-starbucks-Green transition-colors"> <li>Aplica por primera vez</li></Link>
                <Link to={"/actualiza-perfil"} className="m-3 uppercase hover:text-starbucks-Green transition-colors"> <li>Actualiza tu perfil</li> </Link>
                <Link to={"/plazas"} className="m-3 uppercase hover:text-starbucks-Green transition-colors"> <li>Plazas disponibles</li></Link>
                <Link to={"/contactos"} className="m-3 uppercase hover:text-starbucks-Green transition-colors"> <li>Contáctanos</li></Link>

            </ul>
        </aside>
        </>
    )
}

export default AsideMenu;