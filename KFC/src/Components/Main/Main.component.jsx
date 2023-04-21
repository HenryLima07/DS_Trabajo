import VideoContainer from "./VideoContainer/VideoContainer.component";
import TalentoKFCContainer from "./TalentoKFCContainer/TalentoKFCContainer.component"; 

const Main =()=>{
    return(
        <main className=" w-full flex flex-col justify-center items-center">
            <VideoContainer />
            <TalentoKFCContainer />
        </main>
    )
}

export default Main;