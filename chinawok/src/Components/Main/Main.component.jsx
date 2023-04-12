import VideoContainer from "./VideoContainer/VideoContainer.component";
import SeParteContainer from "./SeParteContainer/SeParteContainer.component";
import ExpertosWokContainer from "./ExpertosWokContainer/ExpertosWokContainer.component";

const Main =()=>{
    return(
        <main className="flex items-center justify-center">
            <div className=" w-full xl:w-[85%]">
                <VideoContainer />
                <SeParteContainer />
                <ExpertosWokContainer />
            </div>
        </main>
    )
}

export default Main;