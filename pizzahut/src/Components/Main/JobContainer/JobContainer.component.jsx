
import { Link } from "react-router-dom";

//assets
import job_hut from "/img/art07.svg";
import actualiza_perfil from "../../../assets/image/edit.svg";

import registrate from "../../../assets/image/new.svg";

const JobsContainer = ()=>{
    return(
        <article className={` w-full`}>
            <div className=" w-full relative">
                <img src={job_hut} alt="empleados de pizza hut" className=" w-full"/>

                <div className=" flex flex-col w-1/3 md:w-2/5 absolute top-[6.1rem] sm:top-[9rem] md:top-[11.7rem] lg:top-[14.2rem] xl:top-[15.1rem] 2xl:top-[16rem] left-[2rem] lg:left-[3.5rem]">
                    
                    <Link to={"/registro"} className=" self-start w-[57%] md:w-[60%] ">
                        <img src={registrate} alt="botón para registrarse" className=" w-full" />
                    </Link>
                    <Link to={"/actualiza-perfil"} className=" self-end w-[57%] md:w-[60%] mt-[-1rem] md:mt-[-3.5rem] ">
                        <img src={actualiza_perfil} alt="botón para actualizar perfil" className=" w-full"/>
                    </Link>
                </div>
            </div>
            

        </article>
    )
}

export default JobsContainer;