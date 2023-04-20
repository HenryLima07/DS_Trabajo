
import job_video from "../../../assets/video/reclutamientoPH.mp4";
import front_page from "../../../assets/video/poster.jpg";

const VideoContainer = ()=>{
    return(
        <article className=" flex flex-row">
            <video muted playsInline loop controls poster={front_page} className=" w-full">
                <source src={job_video} type="video/mp4"/>
                Your browser does not support this element
            </video>
        </article>
    )
}

export default VideoContainer;