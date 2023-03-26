import classes from "./MoreInformation.module.scss";

//importing data assets
import gorra from "../../assets/img/wendy/gorra.png"
import crecimiento from "../../assets/img/wendy/crecimiento.png";
import playIcon from "../../assets/img/wendy/play.png";
import miraElVideo from "../../assets/img/wendy/miraelvideo.png";
import cuadradosValoresBG from "/img/wendys/cuadros-valores.png"


import videoWendyGenrente from "../../assets/videos/wendys/ent_gerente.mp4";
import videoAnimation from "../../assets/videos/wendys/anim_prof.gif";
import { useState } from "react";

const Comments ={
    "growth": "growth",
    "teamwork": "teamwork",
    "family": "family"
}

const MoreInformationContainer = ()=>{

    const [currentComment, setCurrentComment] = useState("growth");
    
    
    const setCurrentCommentHandler = (setComment = "growth")=>{
        if(!Comments[setComment]) return;

        setCurrentComment(setComment);
    }

    return(
        <>
            <section className={`flex flex-col pl-24 pr-8 bg-[url("/img/wendys/cuadros-valores.png")]`}>
                <div className="flex flex-col items-start py-8 w-full" >
                    <h1 className=" font-wendysSimpleFont text-5xl text-wendys-blue mb-4">
                        Se auténtico
                    </h1>
                    <h2 className="mb-8 text-xl">
                        En Wendy’s todo lo que te decimos, es real. Mirá nuestros videos y comprobalo.
                    </h2>

                    <ul className={`nav ${classes["nav-tabs"]} ${classes["nav-justified"]} flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 w-full font-wendysSimpleFont text-wendys-blue`} id="tabs-tabJustify" role={"tablist"}>

                        <li className={`${classes["nav-item"]} flex-grow text-center`} role={"presentation"}>

                            <button 
                                onClick={()=>setCurrentCommentHandler("growth")} id="tabs-profesional-tab" 
                                className={`${classes["nav-link"]} w-full block font-medium text-lg leading-tight uppercase border-x-0 border-t-0 border-b-2 border-gray-300 px-6 py-3 my-2 hover:bg-gray-100 ${currentComment === Comments["growth"] ? classes["active"] : ""}`}

                                data-bs-toggle="pill" 
                                data-bs-target="#tabs-profesional" 
                                role="tab" 
                                aria-controls="tabs-profesional" 
                                aria-selected="true"
                            >Crecimiento</button>

                        </li>

                        <li role={"presentation"} className={`${classes["nav-item"]} flex-grow text-center`}>

                            <button 
                                onClick={()=>setCurrentCommentHandler("teamwork")}
                                id="tabs-gerente-tab" 
                                className={`${classes["nav-link"]} w-full block font-medium text-lg leading-tight uppercase border-x-0 border-t-0 border-b-2 border-gray-300 px-6 py-3 my-2 hover:bg-gray-100 ${currentComment === Comments["teamwork"] ? classes["active"] : ""}`} 

                                data-bs-toggle="pill" 
                                data-bs-target="#tabs-gerente"
                                role="tab" 
                                aria-controls="tabs-gerente" 
                                aria-selected="false"
                            >Trabajo en equipo</button>
                        </li>
                        <li role={"presentation"} className={`${classes["nav-item"]} flex-grow text-center`}>

                            <button 
                                onClick={()=>setCurrentCommentHandler("family")}
                                id="tabs-domicilio-tab" 
                                className={`${classes["nav-link"]} w-full block font-medium text-lg leading-tight uppercase border-x-0 border-t-0 border-b-2 border-gray-300 px-6 py-3 my-2 hover:bg-gray-100 ${currentComment === Comments["family"] ? classes["active"] : ""}`} 

                                data-bs-toggle="pill" 
                                data-bs-target="#tabs-domicilio"
                                role="tab" 
                                aria-controls="tabs-domicilio" 
                                aria-selected="false"
                            >Familia</button>
                        </li>
                    </ul>

                    {/* TODO: do animation */}
                    <div id="tabs-tabContentJustify" className={`${classes["tab-content"]} flex flex-row mt-10 w-full items-center`}>

                        <div className={`w-1/2 ${classes["tab-pane"]} ${classes["fade"]} ${currentComment === Comments["growth"] ? `${classes["active"]} ${classes["show"]}`  : ""} `} id="tabs-profesional" role="tabpanel"
                            aria-labelledby="tabs-profesional-tab">

                            <div className="flex flex-col items-center">

                                <p className="text-center italic text-4xl w-3/4">
                                    "Para mi es una bendición, me hizo ser independiente".</p>
                                <br />
                                <br />
                                <p className="text-wendys-background text-center text-lg">Madai Cruz<br />Profesional de Servicio</p>
                            </div>
                        </div>

                        <div className={`w-1/2 ${classes["tab-pane"]} ${classes["fade"]} ${currentComment === Comments["teamwork"] ? `${classes["active"]} ${classes["show"]}`  : ""} `} id="tabs-gerente" role="tabpanel" aria-labelledby="tabs-gerente-tab">
                            <div className="flex flex-col items-center">
                                <p className="text-center italic text-4xl w-3/4">
                                    "Wendy’s es una compañia que te brinda todas las herramientas para que tu puedas crecer".</p>
                                <br />
                                <p className="text-wendys-background text-center text-lg">Alejandro Ramos<br />Gerente de Distrito</p>
                            </div>
                        </div>

                        <div className={`w-1/2 ${classes["tab-pane"]} ${classes["fade"]} ${currentComment === Comments["family"] ? `${classes["active"]} ${classes["show"]}`  : ""} `} id="tabs-domicilio" role="tabpanel" aria-labelledby="tabs-domicilio-tab">
                            <div className="flex flex-col items-center" >
                                <p className="text-center italic text-4xl w-3/4" >
                                    "Lo que más me gusta es la unión y que siempre nos apoyamos".</p>
                                <br />
                                <p className="text-wendys-background text-center text-lg">Emmanuel Escobar<br />Profesional de domicilio
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col w-1/2 items-center relative"> 

                            <img id="videoAnim" src={videoAnimation}  alt="video animaciones"
                                className={`${classes["video-animation"]}  w-60`}/>

                            <img id="planBtn" src={playIcon} className="absolute top-32" />
                            
                            <div>
                                <img src={miraElVideo} data-bs-toggle="modal"
                                    data-bs-target="#exampleModalCenter" alt="" className={`${classes["modal"]}`} />
                            </div>
                        </div>

                    </div>

                </div>


                <div className="my-20">

                    <div className="flex flex-row">

                        <h1 className="text-wendys-background font-wendysSimpleFont text-5xl w-1/2 text-center">¡CRECÉ CON NOSOTROS!
                        </h1>

                        <div className="flex flex-col items-center w-1/2 text-center" >

                            <img src={gorra} alt="gorra icon" className="-mt-10"/>
                        </div>
                    </div>

                    <div className="flex flex-row bg-gray-100 w-full">

                        <div  className="flex flex-col justify-center w-3/5">
                            <img src={crecimiento} alt="crecimiento icon" />
                        </div>

                        <div className="w-2/5 p-10" >
                            <p className="text-wedys-blue text-4xl font-wendysSimpleFont mb-4 text-wendys-blue">¿TIENES METAS PROFESIONALES?</p>
                            <p  className="text-xl">Cada miembro de la tripulación recibe capacitación individual y se expone a todos los
                                lados del negocio. A partir de ahí, todo depende de ti. Wendy's ha definido trayectorias
                                profesionales para aquellos que trabajan duro y tienen hambre de más.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black bg-opacity-50" tabIndex="-1" aria-labelledbgny="exampleModalCenterTitle" aria-modal="true" role="dialog">

                <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none max-w-none mx-32" >

                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current" >

                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">

                            <h5 className="text-xl font-medium leading-normal text-gray-800"  id="exampleModalScrollableLabel">
                            </h5>

                            <button className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body relative p-4" >
                            <div>
                                <video id="videoGrande" controls={true}>
                                    <source src={videoWendyGenrente} type="video/mp4" />
                            </video>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        </>

    );
}

export default MoreInformationContainer;