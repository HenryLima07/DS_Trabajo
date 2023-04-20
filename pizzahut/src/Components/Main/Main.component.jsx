
//importing components
import VideoContainer from "./VideoContainer/VideoContainer.component";
import JobsContainer from "./JobContainer/JobContainer.component";

import menu_icon from "../../assets/image/art06.svg";
import art08 from "../../assets/image/art08.svg";
import art09 from "../../assets/image/art09.svg";
import actualiza_perfil from "../../assets/image/edit.svg";
import empleos_01 from "../../assets/image/empleos_1.svg";
import gold_bg from "../../assets/image/gold-bg.svg";
import gold_small_bg from "../../assets/image/gold-small-bg.svg";
import newimage from "../../assets/image/new.svg";
import really_small_gold from "../../assets/image/really-small-gold-bg.svg";
import really_small_red from "../../assets/image/really-small-red-bg.svg";
import title_bg_gold from "../../assets/image/title-bg-gold.svg";
import title_bg from "../../assets/image/title-bg.svg";

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

/*
            <img src={art08} alt="art8" />
            <img src={art09} alt="art9" />
            <img src={actualiza_perfil} alt="edit" />
            <img src={gold_bg} alt="goldbg" />
            <img src={empleos_01} alt="empleos1" />
            <img src={gold_small_bg} alt="goldsm" />
            <img src={newimage} alt="newimage" />
            <img src={really_small_gold} alt="rsmallgold" />
            <img src={really_small_red} alt="rsmred" />
            <img src={title_bg_gold} alt="titlebggold" />
            <img src={title_bg} alt="titlebg" />
*/