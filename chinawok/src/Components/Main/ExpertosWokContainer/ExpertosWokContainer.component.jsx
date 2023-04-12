
import classes from "./ExpertosWokContainer.module.scss";

//assets
import ambienteEspectacular from "../../../assets/imgs/espectacular.png";
import chefWok from "../../../assets/imgs/circulo.png";

const ExpertosWokContainer = ()=>{
    return(
        <section className={` h-[350px] sm:h-[450px] lg:h-[500px] bg-chinaGreen flex justify-end bg-cover -mt-[10rem] ${classes.corte}`}>
            <div className="bg-chinaGreen flex flex-row justify-around items-end pt-5 px-5 pb-12 z-0">
                <img src={ambienteEspectacular} alt="Trabaja en un ambiente espectacular" className=" w-[45%] h-auto z-[0] " />
                <img src={chefWok} alt="Chinawok chef" className=" w-[35%] mt-[-150px] h-auto z-[0] " />
            </div>
        </section>
    )
}
export default ExpertosWokContainer;