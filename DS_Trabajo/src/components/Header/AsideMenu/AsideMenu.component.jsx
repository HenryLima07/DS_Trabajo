import { Link } from "react-router-dom";

import classes from "./AsideMenu.module.scss";

import AsideCloseIcon from "../../../assets/img/wendy/close-aside.svg";

const restaurants = {
    "wendys": "WENDY'S"
}

const AsideMenu=({asideicon, restaurant})=>{

    const asideTitle = ()=>{
        if(restaurants[restaurant] === "WENDY'S") return "WENDY'S EMPLEOS";
        if(restaurants[restaurant] === "add others") return "WENDY'S EMPLEOS";
        if(restaurants[restaurant] === "add others") return "WENDY'S EMPLEOS";
        if(restaurants[restaurant] === "add others") return "WENDY'S EMPLEOS";
        if(restaurants[restaurant] === "add others") return "WENDY'S EMPLEOS";
    }

    return(
        <aside className={`${classes["aside-menu"]} transition-all duration-300 w-80 h-full fixed -left-80  top-0 bottom-0 shadow-md shadow-black z-[1200] translate-x-80`}>
            <div className="bg-wendys-background flex flex-col">

                <div className="flex flex-row h-30 justify-between items-start pt-4 px-6">
                    <img src={asideicon} alt="Wendy logo" className="w-1/3"/>

                    <div className="w-1/4 flex flex-col items-center">
                        <img src={AsideCloseIcon} alt="close logo" className="w-8" />
                        <h2 className="font-simple-wendys text-white">CLOSE</h2>
                    </div>

                </div>

                <h2 className="font-wendys-default px-2 py-4 w-full text-3xl text-justify text-white"> {asideTitle()} </h2>
            
            </div>

            <ul className="bg-white min-h-full flex flex-col items-start p-4 text-lg text-wendys-blue font-bold">

                <Link to={"/"} className="m-3"> <li>Inicio</li></Link>
                <Link to={"/"} className="m-3"> <li>Aplica por primera vez</li></Link>
                <Link to={"/"} className="m-3"> <li>Actualiza tu perfil</li> </Link>
                <Link to={"/"} className="m-3"> <li>Plazas disponibles</li></Link>
                <Link to={"/"} className="m-3"> <li>Contactanos</li></Link>

            </ul>
        </aside>

    )
}
//1024
export default AsideMenu;