
//importing icon
import HeaderIcon from "../../Assets/img/wendy/wendy_logo.svg";
import AsideIcon from "../../Assets/img/wendy/logo-wht.svg";
import VideoWendy from "../../Assets/videos/wendys/wendys_video.mp4";

//importing elements
import Header from "../../components/Header/Header.component";
import TrabajaContainer from "../../components/Main/TrabajaContainer/TrabajaContainer.component";


const Wendy = ()=>{
    const wendys_assets = {
        "HeaderIcon": HeaderIcon,
        "AsideIcon": AsideIcon,
        "Video_Wendy": VideoWendy,
    }
    return(
        <>
            <Header banner={wendys_assets.HeaderIcon} asideicon = {wendys_assets.AsideIcon} restaurant = "wendys"/>
            <section>
                <TrabajaContainer video={wendys_assets.Video_Wendy} />
            </section>

        </>
    )
}
export default Wendy;