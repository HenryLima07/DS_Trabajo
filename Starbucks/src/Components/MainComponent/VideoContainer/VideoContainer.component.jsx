//assets
import video from "../../../assets/video/partner.mp4";
import front_view from "../../../assets/video/partner.png";

const VideoContainer = ()=>{
    return(
        <article>
            <video loop controls playsInline poster={front_view} className=" w-full" >
                <source type="video/mp4" src={video} className=" w-full"/>
                Your browser does not support this element
            </video>
        </article>
    )
}
export default VideoContainer;