import VideoContainer from "./VideoContainer/VideoContainer.component";
import SeParteContainer from "./SeParteContainer/SeParteContainer.component";

const Main =()=>{
    return(
        <main className=" w-full flex flex-col items-center">
            <VideoContainer />
            <SeParteContainer />
            {/* <VideoContainer /> */}
        </main>
    )
}

export default Main;