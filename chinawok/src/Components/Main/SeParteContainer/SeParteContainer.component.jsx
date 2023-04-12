import { Link } from "react-router-dom";

//assets
import experienceImg from "../../../assets/imgs/experiencia.png";


const SeParteContainer = ()=>{
    return(
        <section className = {`bg-[url(./imgs/mainSection.jpg)] h-[630px] sm:h-[750px] w-[85%] bg-center bg-no-repeat bg-cover flex flex-col`}>
            <img src={experienceImg} alt="Personal con experiencia"  className={` w-[70%] md:w-[50%] pt-[10%] sm:pt-[10%] mb-8 md:mb-24`}/>
            <div>
                <div><Link to={"/registro"}></Link></div>
                <div><Link to={"/actualiza-perfil"}></Link></div>
            </div>
        </section>
    )
}

export default SeParteContainer;