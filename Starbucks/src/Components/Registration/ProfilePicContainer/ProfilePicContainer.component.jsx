import { useState, useEffect, useRef, useCallback } from "react";
import Webcam from "react-webcam";

//importing src
// import chinaGray from "../../../assets/imgs/logoEmpleosGris.png";

//importing elements
import FileUploadComponent from "../../Shared/Form/FileUploadComponent/FileUploadComponent.component";

//importing modules
import { videSettings, imageAccepted, getItemLS, setItemLS } from "../Registration.module";

const ProfilePicContainer = ({setPictureHandler, picture})=>{
    
    const data = getItemLS() || { pic_perfil: "" };

    //takePicture
    const [fileUploaded, setFileUploaded] = useState(null);
    const [OpenCamera, setOpenCamera] = useState(false);
    const webcamRef = useRef(null);
    
    //set image src when taking photo and saving in ls
    const takePhotoHandler = useCallback(
        () => {
          const imageSrc = webcamRef.current.getScreenshot();
          setPictureHandler(imageSrc);

          data.pic_perfil = imageSrc;
          setItemLS(data);
          
          setOpenCameraHandler(false);

        }, [webcamRef]);

    //set image src when file is selected and saving in ls
    useEffect(() => {
        let fileReader, isCancel = false;
        if (fileUploaded) {
          fileReader = new FileReader();
          fileReader.onload = (e) => {
            const { result } = e.target;
            if (result && !isCancel) {
              setPictureHandler(result)
              
              data.pic_perfil = result;
              setItemLS(data)
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
    
    //set image url when uploading files
    const onChangeHandler = (e) => {
        const file = e.target.files[0];
        if (!file.type.match(imageAccepted)) {
          alert("Image mime type is not valid");
          return;
        }
        setFileUploaded(file);
    }

    //setOpenCameraHandler
    const setOpenCameraHandler = (setValue)=>{
        setOpenCamera(setValue);
    }    

    return(
        <div className="mx-8 bg-white rounded-xl">
            
            <div className="flex flex-col justify-center">

                <div className="flex flex-col items-center border-2 rounded-md">

                    <div className="w-52 flex flex-col items-center p-4">
                        {
                            OpenCamera || picture ?
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
                                    :   <></>
                                :
                                <img src={"#"} alt="background wendys icon" />
                        }

                    </div>

                    <div className="w-full mt-4 flex flex-col items-center p-4 border-t-4">
                       
                       <FileUploadComponent onChange={onChangeHandler}></FileUploadComponent> 
                        <br />
                        {
                            OpenCamera ? 
                                <label htmlFor="" className="bg-starbucks-Green text-white py-4 px-8 rounded cursor-pointer" onClick={takePhotoHandler}>Tomar foto</label>
                                :
                                <label className="bg-starbucks-Green text-white py-3 px-6 rounded cursor-pointer" onClick={()=>setOpenCameraHandler(true)}>Abrir camara</label>
                        }
                        
                        <p className="mt-4 text-center">
                            Archivo permitido jpg o png. Tamaño máximo 1 MB
                        </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProfilePicContainer;