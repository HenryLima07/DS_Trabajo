import { Link } from "react-router-dom";

//importing components
import Button from "../../Shared/Button/Button.component";

//assets
import experienceImg from "../../../assets/imgs/experiencia.png";


const SeParteContainer = ()=>{
    return(
        <section className = {` bg-[url(./imgs/mainSection.jpg)] h-[630px] sm:h-[750px] w-full bg-center bg-no-repeat bg-cover flex flex-col items-center`}>
            <img src={experienceImg} alt="Personal con experiencia"  className={` w-[80%] md:w-[50%] pt-[10%] sm:pt-[10%] mb-8 md:mb-24`}/>
            <div className=" flex flex-col md:flex-row w-[70%] md:w-[80%]  justify-around">
                <Button><Link to={"/registro"} className=" text-white text-lg sm:text-xl md:text-2xl uppercase">aplica por primera vez</Link></Button>
                <Button><Link to={"/actualiza-perfil"} className=" text-white text-lg sm:text-xl md:text-2xl uppercase">actualiza tu perfil</Link></Button>
            </div>
        </section>
    )
}

export default SeParteContainer;