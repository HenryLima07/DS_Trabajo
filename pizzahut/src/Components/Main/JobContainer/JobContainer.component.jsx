
import { Link } from "react-router-dom";
import job_hut from "/img/art07.svg";


const JobsContainer = ()=>{
    return(
        <article className={` w-full`}>
            <img src={job_hut} alt="empleados de pizza hut" className=" w-full"/>
            <Link to={"/registro"}></Link>
            <Link to={"/actualiza-perfil"}></Link>
        </article>
    )
}

export default JobsContainer;