import { Link, useNavigate } from "react-router-dom";
import { useState, useCallback, useRef, useEffect } from "react";

//importing useForm hook
import { useForm } from "react-hook-form";
import Webcam from "react-webcam";

//importing img
import niniaBackground from "../../../assets/img/wendy/niniaGray.svg";

//importing form elements
import Form from "../../Shared/Form/Form.component";
import Input from "../../../components/Shared/Form/Input/Input.component";
import Select from "../../Shared/Form/Select/Select.component";
import ErrorElement from "../../Shared/Form/ErrorElement/ErrorElement.component";
import FileUploadComponent from "../../Shared/Form/FileUploadComponent/FileUploadComponent.component";


//data 
const Municipios = [
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
    {id: "1", munNom: "nombre municipio"},
]
const Departamentos = [
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
    {id: "1", dptNombre: "nombre departamento"},
]
const paises = [
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
    {id: "1", paiNombre: "nombre país"},
]

const  castData =(data, dataFrom)=>{
    return data.map(element =>{
        if(dataFrom === "paises") return {id: element.id, value: element.paiNombre};
        if(dataFrom === "municipios") return {id: element.id, value: element.munNom};
        if(dataFrom === "departamentos") return {id: element.id, value: element.dptNombre};
    });
}

//errors messages
const errorsMessages = {
    require: "Este campo es requerido",
    nombre: {
        soloTexto: "El campo solo permite texto",
    },

    numeroDocumento:{
        documentoRegistrado: "Tu documento ya ha sido registrado",
        documentoEmailRegistrado: "El correo indicado ya está asociado a otro documento"
    },

    edad:{
        max: "Edad no puede ser mayor a 99 años",
        min: "Debe tener al menos 18 años"
    },

    email:{
        correoInvalido: "Correo electronico invalido",
        correoRepetido: "Correo electronico en uso por otro usuario"
    }
}

//video settings
const videSettings = {
    width: 900,
    height: 800,
    facingMode: "user",
}


const FirstRegistrationContainer = ()=>{

    //getting objects from useform
    const { handleSubmit, register, formState: { errors } } = useForm();
    const navigateTo = useNavigate();        

    //set and show image from input
    const imageAccepted = /image\/(png|jpg|jpeg)/gm;
    
    //handlers of data for options elements
    const [paisData, setpaisData] = useState([]);
    const [munData, setmunData] = useState([]);
    const [dptData, setdptData] = useState([]);
    
    //takePicture
    const [picture, setPicture] = useState("");
    const [fileUploaded, setFileUploaded] = useState(null);
    const webcamRef = useRef(null);

    //set toogle camera state
    const [OpenCamera, setOpenCamera] = useState(false);

    //casting data from selects
    useEffect(() => {
        setpaisData(castData(paises, "paises"));
        setmunData(castData(Municipios, "municipios"));
        setdptData(castData(Departamentos, "departamentos"));
    }, []);

    //set image view when taking photo
    const takePhotoHandler = useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
          setPicture(imageSrc);
          setOpenCamera(false);
        }, [webcamRef] );

    //set image src when file is selected
    useEffect(() => {
        let fileReader, isCancel = false;
        if (fileUploaded) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result && !isCancel) {
              setPicture(result)
            }
          }
          fileReader.readAsDataURL(fileUploaded);
        }
        return () => {
          isCancel = true;
          if (fileReader && fileReader.readyState === 1) {
            fileReader.abort();
          }
        }
    
      }, [fileUploaded]);

    //setOpenCameraHandler
    const setOpenCameraHandler = (setValue)=>{
        setOpenCamera(setValue);
    }
    
    //set image view when uploading files
    const onChangeHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageAccepted)) {
          alert("Image mime type is not valid");
          return;
        }
        setFileUploaded(file);
      }

    //onSubmitHandler
    const onSubmitHandler = (data)=>{
        const {nombres} = data;
        console.log(nombres);
        navigateTo("/registro-step2");
    }

    //onInvalidHandler
    const onInvalid=()=>{
        
    }




    return(
        <article>
        {/* TODO: Funciones especiales de validacion para documento DUI y correo y despliege de informacion en options
        TODO: takenpicture*/}
            <Form autoComplete="off" 
                onSubmit = {(handleSubmit(onSubmitHandler, onInvalid))}
             >
            <div className = "flex flex-col lg:flex-row p-4 items-center justify-around">
                <div className="mx-8">

                    <div className="flex flex-col justify-center">

                        <div className="flex flex-col items-center border border-gray-200 rounded-md">

                            <div className="w-52 flex flex-col items-center p-4">
                            {
                                OpenCamera || picture?
                                    OpenCamera ? 
                                        <div>
                                            <Webcam
                                                audio={false}
                                                mirrored = {true}
                                                height={800}
                                                ref={webcamRef}
                                                screenshotFormat="image/jpeg"
                                                width={900}
                                                videoConstraints={videSettings}
                                            />
                                        </div>

                                    :
                                        picture ? 
                                            <img src={picture} />
                                        : <></>

                                :
                                    <img src={niniaBackground} alt="background wendys icon" />
                            }

                            </div>

                            <div className="w-full mt-4 flex flex-col items-center bg-gray-200 p-4">

                               <FileUploadComponent innerRef={{...register("fileUpload")}} onChange={onChangeHandler}></FileUploadComponent> 
                                <br />

                                {
                                    OpenCamera ? 
                                    <label htmlFor="" className="bg-wendys-blue text-white py-3 px-8 rounded cursor-pointer" onClick={takePhotoHandler}>Tomar foto</label>
                                    :
                                    <label className="bg-wendys-blue text-white py-3 px-6 rounded cursor-pointer" onClick={()=>setOpenCameraHandler(true)}>Abrir camara</label>
                                }

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
                                        innerRef = {{...register("nombres", {
                                            required: errorsMessages.require, 
                                            pattern:{
                                                value: /^[a-zA-Z\ áéíóúÁÉÍÓÚñÑ\s]*$/,
                                                message: errorsMessages.nombre.soloTexto
                                            } 
                                        })}}
                                    >
                                       <ErrorElement>{errors.nombres?.message}</ErrorElement>
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
                                        innerRef = {{...register("paises", {
                                            
                                            required: errorsMessages.require
                                        })}}
                                        Data = {paisData}
                                    >
                                        <ErrorElement>{errors.paises?.message}</ErrorElement>
                                    </Select>
                                </div>
                            </div>

                            <div className="flex flex-row pb-2 w-full">
                                <div className="flex flex-col p-2 w-1/2">
                                    <Input 
                                        className="w-full"
                                        type={"text"}
                                        name = "numeroDocumento"
                                        required = {true}
                                        label = "Documento de Identidad"
                                        innerRef = {{...register("numeroDocumento", {
                                            required: errorsMessages.require,
                                            
                                        })}}
                                    >
                                        <ErrorElement>{errors.numeroDocumento?.message}</ErrorElement>
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
                                        innerref = {{...register("depto", {
                                            required: errorsMessages.require
                                        })}}
                                        Data={dptData}
                                    >
                                        <ErrorElement>{errors.depto?.message}</ErrorElement>
                                    </Select>
                                </div>

                                    <div className="flex flex-col p-2 w-full">

                                        <Select 
                                            name="municipios"
                                            required = {true}
                                            label = "Municipio"
                                            className="w-full"
                                            firstOption="Seleccione"
                                            innerRef = {{...register("municipio", {
                                                required: errorsMessages.require

                                            })}}

                                            Data={munData}
                                        >
                                            <ErrorElement>{errors.municipio?.message}</ErrorElement>
                                        </Select>
                                    </div>
                            </div>

                            <div className="flex flex-col sm:flex-row pb-2 w-full">
                                
                                <div className="flex flex-row w-full">
                                    
                                    <div className="flex flex-col p-2 w-28">
                                    
                                        <Input 
                                            type={"number"}
                                            name="edad"
                                            label="Edad"
                                            required = {true}
                                            className= "w-full"
                                            innerRef = {{...register("edad", {
                                                required: errorsMessages.require,
                                                max: {
                                                    value: 99,
                                                    message: errorsMessages.edad.max
                                                }, 
                                                min: {
                                                    value: 18,
                                                    message: errorsMessages.edad.min
                                                }
                                                
                                            })}}
                                        >
                                            <ErrorElement>{errors.edad?.message}</ErrorElement>                                           
                                        </Input>
                                    </div>
                                    
                                    <div className="flex flex-col p-2 w-44 md:w-56">
                                        <Input 
                                            label="Télefono"
                                            name="telefono"
                                            type= "number"
                                            className="w-full"
                                            required={true}
                                            innerRef = {{...register("telefono", {
                                                required: errorsMessages.require
                                            })}}
                                        >
                                            <ErrorElement>{errors.telefono?.message}</ErrorElement>
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
                                        innerRef= {{...register("email", {
                                            required: errorsMessages.require, 
                                            pattern:{
                                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                                                message: errorsMessages.email.correoInvalido
                                            } 
                                            
                                        })}}
                                    >
                                        <ErrorElement>{errors.email?.message}</ErrorElement>
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