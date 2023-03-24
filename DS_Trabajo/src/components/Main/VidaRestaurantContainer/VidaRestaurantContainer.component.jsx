import classes from "./VidaRestaurantContainer.module.scss";

//importing data assets
import gorra from "../../../assets/img/wendy/gorra.png"
import crecimiento from "../../../assets/img/wendy/crecimiento.png";
import videoWendyGenrente from "../../../assets/videos/wendys/ent_gerente.mp4"

const VidaRestaurantContainer = ()=>{
    return(
        <>
            <section >
                <div >
                    <h1 className=" font-wendysSimpleFont text-5xl text-wendys-blue mb-4">
                        Se auténtico
                    </h1>
                    <h2 className="mb-8 text-xl">
                        En Wendy’s todo lo que te decimos, es real. Mirá nuestros videos y comprobalo.
                    </h2>

                    <ul className="nav nav-tabs nav-justified flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4 w-full font-wendysSimpleFont text-wendys-blue" id="tabs-tabJustify" role={"tablist"}>

                        <li className="nav-item flex-grow text-center" role={"presentation"}>

                            <a href="#tabs-profesional"  id="tabs-profesional-tab" className="nav-link w-full block font-medium text-lg leading-tight uppercase border-x-0 border-t-0 border-b-2 border-gray-300 px-6 py-3 my-2 hover:bg-gray-300 active"   data-bs-toggle="pill" 
                            data-bs-target="#tabs-profesional" role="tab" aria-controls="tabs-profesional" aria-selected="true">Crecimiento</a>
                        </li>

                        <li role={"presentation"} className="nav-item flex-grow text-center">

                            <a href="#tabs-gerente" id="tabs-gerente-tab" className="nav-link w-full block font-medium text-lg leading-tight uppercase border-x-0 border-t-0 border-b-2 border-gray-300 px-6 py-3 my-2 hover:bg-gray-300 active"  data-bs-toggle="pill" data-bs-target="#tabs-gerente"
                                role="tab" aria-controls="tabs-gerente" aria-selected="false">Trabajo en equipo</a>
                        </li>
                        <li role={"presentation"} className="nav-item flex-grow text-center">

                            <a href="#tabs-domicilio" id="tabs-domicilio-tab" 
                            className="nav-link w-full block font-medium text-lg leading-tight uppercase border-x-0 border-t-0 border-b-2 border-gray-300 px-6 py-3 my-2 hover:bg-gray-300 active" data-bs-toggle="pill" data-bs-target="#tabs-domicilio"
                                role="tab" aria-controls="tabs-domicilio" aria-selected="false">Familia</a>
                        </li>
                    </ul>

                    <div id="tabs-tabContentJustify" className="tab-content flex flex-row mt-10 w-full items-center">

                        <div className="tab-pane fade show active w-1/2" id="tabs-profesional" role="tabpanel"
                            aria-labelledby="tabs-profesional-tab">

                            <div className="flex flex-col items-center">

                                <p className="text-center italic text-4xl w-3/4">
                                    "Para mi es una bendición, me hizo ser independiente".</p>
                                <br />
                                <br />
                                <p className="text-wendys-background text-center text-lg">Madai Cruz<br />Profesional de Servicio</p>
                            </div>
                        </div>

                        <div className="tab-pane fade w-1/2" id="tabs-gerente" role="tabpanel" aria-labelledby="tabs-gerente-tab">
                            <div className="flex flex-col items-center">
                                <p className="text-center italic text-4xl w-3/2">
                                    "Wendy’s es una compañia que te brinda todas las herramientas para que tu puedas crecer".</p>
                                <br />
                                <p className="text-wendys-background text-center text-lg">Alejandro Ramos<br />Gerente de Distrito</p>
                            </div>
                        </div>

                        <div className="tab-pane fade w-1/2" id="tabs-domicilio" role="tabpanel" aria-labelledby="tabs-domicilio-tab">
                            <div className="flex flex-col items-center" >
                                <p className="text-center italic text-4xl" >
                                    "Lo que más me gusta es la unión y que siempre nos apoyamos".</p>
                                <br />
                                <p className="text-wendys-background text-center text-lg">Emmanuel Escobar<br />Profesional de domicilio
                                </p>
                            </div>
                        </div>

                        <div > 
                            <img id="videoAnim" src="./assets/imgs/anim_prof.gif"  alt=""
                                className={`${classes["video-animation"]}`}/>
                            <img id="planBtn" src="./assets/imgs/play.png"  />
                            <div>
                                <img src="./assets/imgs/miraelvideo.png" data-bs-toggle="modal"
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
                            <p className="text-wedys-blue text-4xl font-wendysSimpleFont mb-4">¿TIENES METAS PROFESIONALES?</p>
                            <p  className="text-xl">Cada miembro de la tripulación recibe capacitación individual y se expone a todos los
                                lados del negocio. A partir de ahí, todo depende de ti. Wendy's ha definido trayectorias
                                profesionales para aquellos que trabajan duro y tienen hambre de más.</p>
                        </div>
                    </div>
                </div>
            </section>

            <div  tabIndex="-1" aria-labelledbgny="exampleModalCenterTitle" aria-modal="true" role="dialog">
                <div >
                    <div >
                        <div >
                            <h5 id="exampleModalScrollableLabel">
                            </h5>
                            <button className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
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

export default VidaRestaurantContainer;