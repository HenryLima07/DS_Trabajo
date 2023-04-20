
//importing components
import VideoContainer from "./VideoContainer/VideoContainer.component";
import JobsContainer from "./JobContainer/JobContainer.component";

const Main =()=>{
    return(
        <main className= {`w-full flex flex-col items-center`}>
            <section className=" w-full xl:w-[90%] 2xl:w-[80%]">
                <VideoContainer />
                <div className=" bg-pizzaRed h-4 mb-1"></div>
                <JobsContainer />
            </section>

        </main>
    )
}

export default Main;
