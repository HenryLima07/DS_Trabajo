//importing img
import fondoCajera from "../../../assets/img/wendy/fondoCajera-min.png";
import btnVR from "../../../assets/img/wendy/btn-vida-de-restaurante.png";

import classes from "./VidaRestaurantContainer.module.scss";
import { Link } from "react-router-dom";

const VidaRestaurantContainer = ()=>{
    return(
        <section id="VidaRestauranteDiv" className={`relative bg-wendys-background lg:-mt-[10rem] ${classes["clipBorder"]}`}>
        
            <img src={fondoCajera} className="w-full" />
            <Link to={"/vida-restaurante"}>
                <img src={btnVR} className="w-3/4 md:w-auto absolute top-2/3 left-2 sm:top-1/2 sm:left-6" />
            </Link>
        </section>
    );
}

export default VidaRestaurantContainer;