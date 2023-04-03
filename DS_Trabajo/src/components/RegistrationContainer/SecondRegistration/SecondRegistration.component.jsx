import Form from "../../Shared/Form/Form.component";
import Input from "../../Shared/Form/Input/Input.component";
import Select from "../../Shared/Form/Select/Select.component";
import ErrorElement from "../../Shared/Form/ErrorElement/ErrorElement.component";
import FormFooterContainer from "../FormFooterContainer/FormFooterContainer.component";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";


//importing modules
import { errorsMessages, defaultOptions, checkDB } from "../Registration.module";

const estudios=[
    {id: "1", nieNombre: "Pensum cerrado"},
    {id: "2", nieNombre: "Básico incompleto"},
    {id: "3", nieNombre: "Primaria"},
    {id: "4", nieNombre: "Noveno"},
    {id: "5", nieNombre: "Quinto año de secundaria (sin bachiller)"},
    {id: "6", nieNombre: "No aplica"},
    {id: "7", nieNombre: "Universidad 1er año"},
    {id: "8", nieNombre: "Universidad 2do año"},
    {id: "9", nieNombre: "Universidad 3er año"},
    {id: "10", nieNombre: "Universidad 4to año"},
    {id: "15", nieNombre: "Universidad 5to año"},
    {id: "15", nieNombre: "Graduado universitario"},
    {id: "15", nieNombre: "Universidad incompleta"},
    {id: "15", nieNombre: "Maestria"},
]

const SecondRegistrationContainer = ({data=[], dataFrom="database"})=>{
    //information i dont know
    const information = false;

    const defaultEstudios = checkDB(data, dataFrom) ? "value from db" : null;



    const { handleSubmit, register, setValue, formState: { errors } } = useForm();

    //casting at loading
    useEffect(() => {
        if(!defaultEstudios) return;
        setValue(defaultEstudios);
    }, []);

    //onSubmitHandler
    const onSubmitHandler = (data)=>{

        console.log(data);
    }

    const onInvalid=()=>{
        
    }
    

    return(
        <section>

            <article className="flex flex-col items-center py-8">

            <Form autoComplete = "off" onSubmit = {handleSubmit(onSubmitHandler, onInvalid)}>

                <div className="flex flex-col items-start">

                    <div className="flex flex-col md:flex-row pb-2 w-full">

                        <div className="flex flex-col p-2 w-full">

                            <Select 
                                name="estudios"
                                className="w-60"
                                label= "Nivel de estudios"
                                required = {true}
                                firstOption="Seleccione"
                                
                                innerRef = {{...register("nivelEstudios", {
                                    required: errorsMessages.require
                                })}}

                                defaultValue = { defaultEstudios }

                                Data = {estudios}

                            ><ErrorElement>{errors.nivelEstudios?.message}</ErrorElement></Select>
                        </div>

                        <div className="flex flex-col p-2 w-full">
                            <Input 
                                name="carrera"
                                label="Indíquenos la carrera"
                                type={"text"}
                                className="w-full"

                                innerRef={{...register("carrera")}}
                            />
                        </div>
                    </div>

                    <div className="flex flex-row pb-2">

                        <div className="flex flex-col md:flex-row p-2 justify-center" >
                            <Select 
                                    name="discapacitado"
                                    label="Posees algún tipo de discapacidad"
                                    className="w-20"
                                    Data={ defaultOptions }

                                    innerRef= {{...register("discapacidad")}}
                                />
                        </div>
                    </div>

                    <div className="flex flex-row pb-2 w-full">

                        <div className="flex flex-col p-2 w-full">
                            <Input 
                                type={"text"}
                                name="discapacidadDesc"
                                label="Cuéntanos qué discapacidad tienes"
                                className="w*full"

                                innerRef={{...register("discapacidadDesc")}}
                            />
                        </div>
                    </div>

                    <div className="flex flex-col pb-2 mt-8">
                        <h2 className="text-2xl font-bold mb-4 mx-4">
                            ¿En qué posición estás interesado en trabajar?
                            <label className="text-red-600">*</label> 
                        </h2>

                        <div className="mx-4">

            {/* TODO:form array Name */}
                            <div>

                                <div>

                                    <div>

                                        {
                                            information ?
                                                <>
                                                    <input type="radio" id="job.id" value="job.id" />
                                                    <label htmlFor="job.id"> job.nombre</label><br/>
                                                </>
                                                :
                                                <></>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full text-center">
                        <button className="bg-wendys-blue hover:bg-wendys-darkblue transition-colors text-white my-8 py-4 px-8 rounded font-bold">Guardar Información</button>
                    </div>
                </div>
            </Form>

            </article>
            <FormFooterContainer><Link to={"/registro"}>&lt; REGRESAR</Link></FormFooterContainer>
            
        </section>
       
    );
}

export default SecondRegistrationContainer;