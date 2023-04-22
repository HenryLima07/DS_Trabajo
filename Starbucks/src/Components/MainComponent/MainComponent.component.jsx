
//elements
import InformationContainer from "./InformationContainer/InformationContainer.component";
import NavContainer from "./NavContainer/NavContainer.component";
import VideoContainer from "./VideoContainer/VideoContainer.component";


const MainComponent = ()=>{
    return(
        <main className="flex flex-row px-8 justify-around">
            <section className=" w-3/5">
                <VideoContainer />
                <InformationContainer />
            </section>
            <NavContainer />
        </main>
    )
}

export default MainComponent;