//importing imgs
import valoresImg from '../../../assets/img/wendy/valores.svg';
import backgroundValores from '/img/wendys/cuadros-valores.png';

import classes from "./ValoresContainer.module.scss";


const ValoresContainer = ()=>{
    return(
        <section className={`flex flex-col items-center md:flex-row bg-[url('/img/wendys/cuadros-valores.png')] lg:-mt-[10rem] ${classes["clipBorder"]}`}>
            
            <div className="md:w-1/2 ml-10 lg:ml-32 my-10 lg:my-40 mr-10 lg:mr-20">
                <h1 className="text-wendys-blue font-wendysSimpleFont text-3xl sm:text-4xl mb-6 lg:mt-20">VALORES</h1>
                <p className="text-base sm:text-xl leading-relaxed">
                    Cuando nuestras hamburguesas de forma cuadrada hicieron
                    su primera aparición en escena, hace 50 años,
                    la gente sabía que nuestro enfoque, no era como ningún otro.
                    Esto mismo ocurre con la forma en que apoyamos a nuestros empleados.
                    Pensamos fuera de la caja, nuestro entorno de
                    franqueza y honestidad, permite que todos prosperen a su manera.
                    Es lo que nuestro fundador Dave Thomas pretendía desde el primer día.
                </p>
            </div>
            <div className="w-1/2">
            <img src={valoresImg} alt="" className={`pt-2 md:pt-8 w-4/5`} />
            </div>
    </section>
    );
}

export default ValoresContainer;