//importing img
import fondoCajera from "../../../assets/img/wendy/fondoCajera-min.png";
import btnVR from "../../../assets/img/wendy/btn-vida-de-restaurante.png";


const VidaRestaurantContainer = ()=>{
    return(
        <section id="VidaRestauranteDiv" className="relative bg-wendys-background lg:-mt-[10rem] clipBorder">
        
            <img src={fondoCajera} className="w-full" />
            <a>
                <img src={btnVR} className="w-3/4 md:w-auto absolute top-2/3 left-2 sm:top-1/2 sm:left-6" />
            </a>
        </section>
    );
}

export default VidaRestaurantContainer;