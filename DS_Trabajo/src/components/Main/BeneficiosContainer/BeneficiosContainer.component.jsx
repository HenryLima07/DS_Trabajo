//importing img
import IconBeneficio01 from "../../../assets/img/wendy/circulo01.png";
import IconBeneficio02 from "../../../assets/img/wendy/circulo02.png";
import IconBeneficio03 from "../../../assets/img/wendy/circulo03.png";
import IconBeneficio04 from "../../../assets/img/wendy/circulo04.png";
import IconBeneficio05 from "../../../assets/img/wendy/circulo05.png";
import IconBeneficio06 from "../../../assets/img/wendy/circulo06.png";

import backgroundValores from "/img/wendys/cuadros-valores.png"

const BeneficiosContainer = ()=>{
    return(
        <section>
            
            <article className="bg-[#029cd433] flex flex-col lg:flex-row pr-10 lg:pr-16 py-10">
    
                <div className="ml-10 lg:w-2/5 lg:ml-32 mb-10">
                    <p className="text-red-700 text-4xl sm:text-5xl align-self-center font-wendysSimpleFont ">Beneficios</p>
                </div>
            
                <div className="ml-10 lg:w-3/5 text-left">
                    <p className="text-base sm:text-xl leading-relaxed">
                        Unirte a nuestra familia “Wendy`s es más que solo tener cerca
                        las papitas francesas que todos anhelamos. Beneficios de ley,
                        oportunidades de crecimiento y un buen ambiente,
                        son solo algunos de los beneficios que todos
                        disfrutamos en esta familia.
                    </p>
                </div>
            </article>

        <article className={`flex flex-col pl-10 lg:pl-32 pr-10 lg:pr-16 py-16 bg-[url('${backgroundValores}')]`}>
            <h1 className="text-wendys-blue font-wendysSimpleFont text-3xl sm:text-4xl mb-6">MÁS ALLÁ DE LOS BENEFICIOS</h1>
            <p className="text-base sm:text-xl leading-relaxed">
                Estar tan cerca de un Frosty ... ¡ no es el único beneficio
                de ser parte de Wendy’s!
                Aquí vamos más allá de los beneficios tradicionales,
                comida deliciosa, amigos reales, trabajo divertido y dinámico,
                además de espacio para crecer, son solo una pequeña parte
                de todo lo que ganás, ¡por hacer bien tu trabajo!
            </p>
        </article>

        <article
            className="grid justify-center justify-items-center grid-cols-3 md:px-20 sm:grid-cols-3 md:grid-cols-6 pb-8 bg-[url('./assets/imgs/cuadros-valores.png')]">
            <img src={IconBeneficio01}  className="img-fluid" alt="" />
            <img src={IconBeneficio02}  className="img-fluid" alt="" />
            <img src={IconBeneficio03}  className="img-fluid" alt="" />
            <img src={IconBeneficio04}  className="img-fluid" alt="" />
            <img src={IconBeneficio05}  className="img-fluid" alt="" />
            <img src={IconBeneficio06}  className="img-fluid" alt="" />
        </article>
    </section>
    );
}

export default BeneficiosContainer;