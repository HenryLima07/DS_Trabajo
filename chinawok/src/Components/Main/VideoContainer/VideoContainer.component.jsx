
//assets
import videoChinawok from "../../../assets/videos/chinawok.mp4";
import videoPoster from "../../../assets/videos/chinawok.jpg"

const VideoContainer = ()=>{
    return(
        <section className="bg-black hidden sm:block w-full">
            <video muted playsInline loop controls poster={videoPoster} className=" w-full">
                <source src={videoChinawok} type="video/mp4"/> 
                Your browser does not support this element
            </video>
        </section>
    )
}

export default VideoContainer;