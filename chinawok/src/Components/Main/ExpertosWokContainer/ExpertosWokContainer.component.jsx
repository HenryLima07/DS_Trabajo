
import classes from "./ExpertosWokContainer.module.scss";

//assets
import ambienteEspectacular from "../../../assets/imgs/espectacular.png";
import chefWok from "../../../assets/imgs/circulo.png";

const ExpertosWokContainer = ()=>{
    return(
        <section className={` h-[275px] xs:h-[300px] sm:h-[450px] lg:h-[500px] bg-chinaGreen flex justify-center bg-cover -mt-[5rem] lg:-mt-[7rem] ${classes.corte}`}>
            <div className="bg-chinaGreen flex flex-row justify-around items-end pt-5 px-5 pb-12 z-0">
                <img src={ambienteEspectacular} alt="Trabaja en un ambiente espectacular" className=" w-[50%] lg:w-[40%] h-auto z-[0] " />
                <img src={chefWok} alt="Chinawok chef" className=" w-[40%] mt-[-150px] lg:w-[30%] h-auto z-[0] " />
            </div>
        </section>
    )
}
export default ExpertosWokContainer;