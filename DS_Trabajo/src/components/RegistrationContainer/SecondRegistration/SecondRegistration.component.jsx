import Form from "../../Shared/Form/Form.component";
import Input from "../../Shared/Form/Input/Input.component";
import Select from "../../Shared/Form/Select/Select.component";
import ErrorElement from "../../Shared/Form/ErrorElement/ErrorElement.component";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";


//errors messages
const errorsMessages = {
    require: "Este campo es requerido",
}


const SecondRegistrationContainer = ()=>{
    const information = false;

    const { handleSubmit, register, formState: { errors } } = useForm();

    //onSubmitHandler
    const onSubmitHandler = (data)=>{

        const {nivelEstudios} = data;
        console.log(nivelEstudios);
    }

    const onInvalid=()=>{
        
    }
    

    return(
        <section>

            <article className="flex flex-col items-center py-8">

            <Form autoComplete = "off" onSubmit = {handleSubmit(onSubmitHandler, onInvalid)}>

                <div className="flex flex-col items-start">

                    <div className="flex flex-col md:flex-row pb-2 w-full">

                        <div className="flex flex-col p-2">

                            <Select 
                                name="nivelEstudios"
                                required = {true}
                                label= "Nivel de estudios"
                                className="w-60"
                                firstOption="Seleccione"
                                innerRef = {{...register("nivelEstudios", {
                                    required: errorsMessages.require
                                })}}

                            ><ErrorElement>{errors.nivelEstudios?.message}</ErrorElement></Select>
                        </div>

                        <div className="flex flex-col p-2 w-full">
                            <Input 
                                name="numeroDocumento"
                                label="Indíquenos la carrera"
                                type={"text"}
                                className="w-full"
                            />
                        </div>
                    </div>

                    <div className="flex flex-row pb-2">

                        <div className="flex flex-col md:flex-row p-2 justify-center" >
                            <Select 
                                    name="discapacitado"
                                    label="Posees algún tipo de discapacidad"
                                    className="w-20"
                                    defaultOptions={true}
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
                            {/* TODO:span */}
                        </div>
                    </div>

                    <div className="w-full text-center">
                        <button className="bg-wendys-blue hover:bg-wendys-darkblue transition-colors text-white my-8 py-4 px-8 rounded font-bold">Guardar Información</button>
                    </div>
                </div>
            </Form>

            </article>

            <div className=" bg-[#029CD4] flex flex-col lg:flex-row px-10 lg:px-16  py-6 w-full">

                <div className="flex flex-row justify-between w-full">

                    <div className="w-full text-left font-wendysSimpleFont text-xl text-white uppercase cursor-pointer">
                         <Link to={"/registro"}>&lt; Regresar</Link>
                    </div>
                    <div className="w-1/2 text-right font-wendysSimpleFont text-xl text-white hidden">

                    </div>
                </div>
            </div>
            
        </section>
       
    );
}

export default SecondRegistrationContainer;