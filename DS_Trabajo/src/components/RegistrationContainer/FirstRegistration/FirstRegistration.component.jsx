import { Link } from "react-router-dom";
import Form from "../../Shared/Form/Form.component";
import Input from "../../Shared/Input/Input.component";
import ErrorElement from "../../Shared/ErrorElement/ErrorElement.component";

//importing useForm hook
import { useForm } from "react-hook-form";
import { useState } from "react";

const FirstRegistrationContainer = ()=>{
    //getting objects from useform
    const { handleSubmit, register, watch, formState: { errors } } = useForm();

    //allow user move into next step
    const [formError, setError] = useState(true);

    const setErrorHandler=(state)=>setError(state);
        

    //onSubmitHandler
    const onSubmitHandler = (e, data)=>{
        setErrorHandler(false);
        console.log(data);
    }

    const onInvalid=()=>{
        setErrorHandler(true);
    }


    return(
        <article>
        {/* TODO: formgroup */}
            <Form autoComplete="off" 
                onSubmit = {(handleSubmit(onSubmitHandler, onInvalid))}
             >
            <div className = "flex flex-col lg:flex-row p-4 items-center justify-around">
                <div className="mx-8">

                    <div className="flex flex-col justify-center">

                        <div className="flex flex-col items-center border border-gray-200 rounded-md">

                            <div className="w-52 flex flex-col items-center p-4">

                                {/* TODO: WEBCAM ? and ng-template */}
                            </div>

                            <div className="w-full mt-4 flex flex-col items-center bg-gray-200 p-4">

                                {/* TODO: app file upload */}

                                <br />
                                <label className="bg-wendys-blue text-white py-3 px-6 rounded cursor-pointer" htmlFor="">Abrir camara</label>
                                <label htmlFor="" className="bg-wendys-blue text-white py-3 px-8 rounded cursor-pointer">Tomar foto</label>

                                <p className="mt-4">
                                    Archivo permitido jpg o png. Tamaño máximo 1 MB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col items-center py-8 w-full">

                    <div className="flex flex-col items-center w-full">

                        <div className="flex flex-col items-start w-11/12">

                            <div className="flex flex-col sm:flex-row pb-2 w-full">

                                <div className="flex flex-col p-2 w-full">

                                    <Input
                                        type="text"
                                        id="nombres"
                                        name="nombres"
                                        aria-invalid = { errors.nombres }
                                        required = {true}
                                        label = "Nombre completo"
                                        innerref = {{...register("nombres", {required: true}) }}
                                            
                                    >
                                        {errors.email?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}
                                    </Input>
                                </div>
                            </div>

                            <div className="flex flex-row pb-2 w-full">

                                <div className="flex flex-col p-2 w-full">
                                 
                                    <Input 
                                        className="w-1/2"
                                        name="paises"
                                        label="País donde vive"
                                        required = {true}
                                        firstOption="Seleccione"
                                        innerref = {{...register("paises")}}
                                    />
                                </div>
                            </div>

                                <div className="flex flex-row pb-2 w-full">

                                    <div className="flex flex-col p-2 w-full">
                                        <Input 
                                            className="w-1/2"
                                            type={"text"}
                                            name = "numeroDocumento"
                                            required = {true}
                                            label = "Documento de Identidad"
                                            innerref = {{...register("numeroDocumento")}}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row pb-2 w-full">

                                    <div className="flex flex-col p-2 w-full">
                                        <Input name="deptos" 
                                        className="w-full"
                                        label="Departamentos"
                                        required={true}
                                        firstOption="Seleccione"
                                        innerref = {{...register("deptos")}}
                                         />
                                    </div>

                                    <div className="flex flex-col p-2 w-full">

                                        <Input 
                                            name="municipios"
                                            required = {true}
                                            label = "Municipio"
                                            className="w-full"
                                            firstOption="Seleccione"
                                            innerref = {{...register("municipios")}}
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row pb-2 w-full">
                                    
                                    <div className="flex flex-row w-full">

                                        <div className="flex flex-col p-2">
                                            <Input 
                                                type={"number"}
                                                name="edad"
                                                label="Edad"
                                                required = {true}
                                                className= "w-20"
                                                innerref = {{...register("edad")}}
                                            />
                                        </div>

                                        <div className="flex flex-col p-2">
                                            <Input 
                                                label="Télefono"
                                                name="telefono"
                                                type= "number"
                                                className="w-40 md:w-52"
                                                innerref = {{...register("telefono")}}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-2 w-full">

                                        <Input 
                                            label="E-mail"
                                            name="email"
                                            required={true}
                                            type="email"
                                            className="w-full"
                                            innerref = {{...register("email")}}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" bg-[#029CD4] flex flex-col lg:flex-row px-10 lg:px-16 py-6 w-full">

                    <div className="flex flex-row justify-between w-full">
                        {/* 
                        <div className=" w-full text-right font-wendysSimpleFont text-xl text-white"></div>  */}
                        <div className=" w-full text-right font-wendysSimpleFont text-xl text-white">
                            {   formError ? <></>
                                <Link to={"/registro-step2"}><button type="submit">CONTINUAR &gt;</button></Link>}
                        </div> 
                    </div>
                </div>
            </Form>

        </article>
    )
}

export default FirstRegistrationContainer;