import backgroundTexture from '/img/wendys/black-plain-concrete-textured.jpg';
import seccionIcon from "../../../assets/img/wendy/seccion.png";

const HistoriaContainer = ()=>{
    return(

        <section className={`bg-[url('${backgroundTexture}')] bg-cover flex flex-col items-center md:flex-row lg:-mt-[10rem] clipBorder`}>
            <div className="mr-10 md:mr-0 md:w-6/12 ml-10 lg:ml-32 my-10 lg:my-60 pt-10">
                <h3 className="text-wendys-blue font-wendysSimpleFont text-2xl">UN POCO DE</h3>
                <h2 className="text-white font-wendysSimpleFont text-4xl sm:text-6xl mb-12 mt-2">Historia de Wendy's</h2>
                <p className="text-white text-base sm:text-xl leading-relaxed">
                    En primer lugar, sí, Wendy es una persona real,
                    muy especial por cierto, pues es la hija de nuestro fundador Dave Thomas,
                    y hoy en día, Wendy Thomas, es una de las más exitosas propietarias de franquicia
                    en la industria de restaurantes.
                    Creemos que Dave estaría orgulloso, en 1969, miró a su alrededor en todos
                    los demás restaurantes de hamburguesas y dijo: “No. La gente se merece algo mejor ".
                    En ese momento, otros restaurantes de servicio rápido utilizaban carne
                    congelada y alimentos de producción masiva.
                    Pero Dave no quería eso. Su enfoque siempre fue servir hamburguesas
                    frescas hechas en el momento que el cliente las ordena, y eso cambió el juego.
                    Ese compromiso inquebrantable de hacer felices a los clientes,
                    es lo que impulsa todo lo que hacemos hoy.
                </p>
            </div>

            <div className="w-7/12 md:w-6/12 overflow-clip pt-5 md:pt-20">
                <img src={seccionIcon} className="w-[120%] max-w-[200%]" />
            </div>

    </section>
    )
}

export default HistoriaContainer;