//importing icons
import rowIcon from "../../../assets/img/wendy/flechas.png";
import workWithUsImage from "../../../assets/img/wendy/trabaja-con-nosotros.svg";
import ninia from '/img/wendys/ninia.svg';
import VideoWendy from "../../../assets/videos/wendys/wendys_video.mp4";
import { Link } from "react-router-dom";

//importing classes
import classes from "./TrabajaContainer.module.scss";

const TrabajaContainer = ()=>{
    return (
        <section id="TrabajaConNosotrosDiv" className={`flex flex-col lg:flex-row w-full bg-wendys-background bg-[url('/img/wendys/ninia.svg')] bg-no-repeat bg-smallWaterMarkSize sm:bg-mediumWaterMarkSize lg:bg-normalWaterMarkSize bg-smallWaterMarkPositon sm:bg-mediumWaterMarkPositon lg:bg-normalWaterMarkPositon`}>
        
            <div className="w-full flex flex-col items-center mt-20 mb-10 lg:mb-40">

                <div className="flex flex-col max-w-md w-2/3">
                    <video muted={true} autoPlay={true} playsInline={true} loop={true} className={`object-fit w-full ${classes["video"]}`}>
                        <source src={VideoWendy} type="video/mp4" />
                    </video>
                </div>
            </div>

            <div className="flex flex-col w-full justify-center items-center">
            <div className="max-w-md lg:max-w-none w-5/6">
                <object data={workWithUsImage} type="image/svg+xml" ></object>
            </div>
            
            <div className="mb-10 lg:mb-0">
            <Link to = "/registro">
                    <div  className="bg-wendys-blue hover:bg-wendys-darkblue transition-colors px-6 sm:px-20 py-4 rounded-lg font-wendysSimpleFont text-white text-xl text-center"
                        style={{lineHeight: 80 + "%"}}>
                        APLICÁ POR <br /> PRIMERA VEZ
                    </div>
                </Link>
                {/* TODO: (click)="apply()" */}
            </div>

            <div className="w-full text-left hidden lg:block">
                <img src={rowIcon} alt="row icon" />
            </div>
            </div>

        </section>
    );
}



export default TrabajaContainer;