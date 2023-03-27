import { Link, useNavigate } from "react-router-dom";

//importing form elements
import Form from "../../Shared/Form/Form.component";
import Input from "../../../components/Shared/Form/Input/Input.component";
import Select from "../../Shared/Form/Select/Select.component";
import ErrorElement from "../../Shared/Form/ErrorElement/ErrorElement.component";

//importing useForm hook
import { useForm } from "react-hook-form";

const FirstRegistrationContainer = ()=>{
    //getting objects from useform
    const { handleSubmit, register, watch, formState: { errors } } = useForm();
    const navigateTo = useNavigate();

    const setErrorHandler=(state)=>setError(state);
        

    //onSubmitHandler
    const onSubmitHandler = (data)=>{
        const {nombres} = data;
        console.log(nombres);
        navigateTo("/registro-step2");
    }

    const onInvalid=()=>{
        
    }


    return(
        <article>
        {/* TODO: Funciones especiales de validacion para documento DUI y correo */}
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
                                        required = {true}
                                        label = "Nombre completo"
                                        innerRef = {{...register("nombres", {required: true, pattern: /^[A-Za-z]+$/}) }}
                                    >
                                        {errors.nombres?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}
                                        {errors.nombres?.type === "pattern" && (<ErrorElement>El campo solo permite texto</ErrorElement>)}
                                    </Input>
                                </div>
                            </div>

                            <div className="flex flex-row pb-2 w-full">

                                <div className="flex flex-col p-2 w-full">
                                 
                                    <Select 
                                        className="w-1/2"
                                        name="paises"
                                        label="País donde vive"
                                        required = {true}
                                        firstOption="Seleccione"
                                        innerRef = {{...register("paises", {required: true})}}
                                    >
                                        {errors.paises?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}
                                    </Select>
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
                                            innerRef = {{...register("numeroDocumento", {required: true})}}
                                        >
                                            {errors.numeroDocumento?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}
                                            {errors.numeroDocumento?.type === "registeredDocument" && (<ErrorElement>Tu documento ya ha sido registrado</ErrorElement>)}
                                                {errors.numeroDocumento?.type === "registeredEmailDocument" && (<ErrorElement>El correo indicado ya está asociado a otro documento</ErrorElement>)}
                                        </Input>
                                    </div>
                                </div>

                                <div className="flex flex-col sm:flex-row pb-2 w-full">

                                    <div className="flex flex-col p-2 w-full">
                                        <Select name="deptos" 
                                            className="w-full"
                                            label="Departamentos"
                                            required={true}
                                            firstOption="Seleccione"
                                            innerref = {{...register("depto", {required: true})}}
                                        >
                                            {errors.depto?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}

                                        </Select>
                                    </div>

                                    <div className="flex flex-col p-2 w-full">

                                        <Select 
                                            name="municipios"
                                            required = {true}
                                            label = "Municipio"
                                            className="w-full"
                                            firstOption="Seleccione"
                                            innerRef = {{...register("municipio", {required: true})}}
                                        >
                                            {errors.municipio?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}

                                        </Select>
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
                                                innerRef = {{...register("edad", {required: true, max: 99 , min: 18})}}
                                            >
                                                {errors.edad?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}                                           
                                                {errors.edad?.type === "min" && (<ErrorElement>Debe tener al menos 18 años</ErrorElement>)}                                           
                                                {errors.edad?.type === "max" && (<ErrorElement>Su edad debe ser menor a 99 años</ErrorElement>)}                                           
                                            </Input>
                                        </div>

                                        <div className="flex flex-col p-2">
                                            <Input 
                                                label="Télefono"
                                                name="telefono"
                                                type= "number"
                                                className="w-40 md:w-52"
                                                innerRef = {{...register("telefono", {required: true})}}
                                            >
                                                {errors.municipio?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}
                                            </Input>
                                        </div>
                                    </div>
                                    <div className="flex flex-col p-2 w-full">

                                        <Input 
                                            label="E-mail"
                                            name="email"
                                            required={true}
                                            type="email"
                                            className="w-full"
                                            innerRef= {{...register("email", {required: true})}}
                                        >
                                            {errors.email?.type === "required" && (<ErrorElement>El campo es requerido</ErrorElement>)}
                                        </Input>
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
                            <button type="submit">CONTINUAR &gt;</button>
                        </div> 
                    </div>
                </div>
            </Form>

        </article>
    )
}

export default FirstRegistrationContainer;