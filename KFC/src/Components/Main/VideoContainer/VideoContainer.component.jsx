
import video from "../../../assets/video/reclutamientoKFC.mp4"
import  front_face from "../../../assets/video/reclutamientoKFC.jpg";


const VideoContainer = ()=>{
    return(
        <section className=" w-full lg:w-[90%] self-center flex flex-row">
            <video muted playsInline controls loop poster={front_face} className="w-full" >
                <source src={video} type="video/mp4" className="w-full"/>
                Your browser does not support this element
            </video>
        </section>
    );
}

export default VideoContainer;