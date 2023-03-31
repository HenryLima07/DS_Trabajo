import { useState, useCallback, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import Webcam from "react-webcam";

//importing src
import niniaBackground from "../../../assets/img/wendy/niniaGray.svg";

//importing elements
import Form from "../../Shared/Form/Form.component";
import Input from "../../../components/Shared/Form/Input/Input.component";
import Select from "../../Shared/Form/Select/Select.component";
import ErrorElement from "../../Shared/Form/ErrorElement/ErrorElement.component";
import FileUploadComponent from "../../Shared/Form/FileUploadComponent/FileUploadComponent.component";

//importing modules
import { 
    castData, 
    errorsMessages, 
    videSettings, 
    onInvalid, 
    imageAccepted, 
    setItemLS, 
    clearLS
} from "../Registration.module";

//TODO: save in local storage users information after first registration step


//data 
const Municipios = [
    {id: "1", munNom: "nombre 1"},
    {id: "2", munNom: "nombre 2"},
    {id: "3", munNom: "nombre 3"},
    {id: "4", munNom: "nombre 4"},
    {id: "5", munNom: "nombre 5"},
    {id: "6", munNom: "nombre 6"},
    {id: "7", munNom: "nombre 7"},
    {id: "8", munNom: "nombre 8"},
    {id: "9", munNom: "nombre 9"},
    {id: "10", munNom: "nombre 0"},
]
const Departamentos = [
    {id: "1", dptNombre: "nombre 1"},
    {id: "2", dptNombre: "nombre 2"},
    {id: "3", dptNombre: "nombre 3"},
    {id: "4", dptNombre: "nombre 4"},
    {id: "5", dptNombre: "nombre 5"},
    {id: "6", dptNombre: "nombre 6"},
    {id: "7", dptNombre: "nombre 7"},
    {id: "8", dptNombre: "nombre 8"},
    {id: "9", dptNombre: "nombre 9"},
    {id: "0", dptNombre: "nombre 0"},
]
const paises = [
    {id: "1", paiNombre: "nombre 9"},
    {id: "2", paiNombre: "nombre 8"},
    {id: "3", paiNombre: "nombre 7"},
    {id: "4", paiNombre: "nombre 6"},
    {id: "5", paiNombre: "nombre 5"},
    {id: "6", paiNombre: "nombre 4"},
    {id: "7", paiNombre: "nombre 3"},
    {id: "8", paiNombre: "nombre 2"},
    {id: "9", paiNombre: "nombre 1"},
    {id: "0", paiNombre: "nombre 0"},
]



const FirstRegistrationContainer = ({data, dataFrom})=>{
    const navigateTo = useNavigate();

    //getting objects from useform
    const { handleSubmit, register, formState: { errors } } = useForm();
    
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

    //casting data from selects and assing data to img elements
    useEffect(() => {
        setpaisData(castData(paises, "paises"));
        setmunData(castData(Municipios, "municipios"));
        setdptData(castData(Departamentos, "departamentos"));

        if(data && dataFrom === "localstorage") setPicture(data.pic_perfil);
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
    
    const onSubmitHandler = (data)=>{
        if(!data) return;
        
        //clearing localstorage to save new instance on same key
        if(item) clearLS(item);

        const dataUser ={
            "nombre": data.nombres,
            "pais": data.paises,
            "documento": data.numeroDocumento,
            "departamento": data.depto,
            "municipio": data.municipio,
            "edad": data.edad,
            "telefono": data.telefono,
            "email": data.email,
            "pic_perfil": picture
        }
        setItemLS(dataUser);

        navigateTo("/registro-step2");
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

    return(
        <article>
        {/* TODO: Funciones especiales de validacion para documento DUI y correo y despliege de informacion en options*/}
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

                               <FileUploadComponent onChange={onChangeHandler}></FileUploadComponent> 
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

                                        <Select 
                                            name="deptos"
                                            className="w-full"
                                            label   = "Departamentos"
                                            required = {true}
                                            firstOption="Seleccione"
                                            innerRef = {{...register("depto", {
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
                                            className="w-full"
                                            label   = "Municipio"
                                            required = {true}
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