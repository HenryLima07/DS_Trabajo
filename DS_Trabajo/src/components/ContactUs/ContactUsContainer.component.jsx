
import { useEffect, useState } from 'react';

const imageMimeType = /image\/(png|jpg|jpeg)/i;


const ContactUsContainer = ()=>{

    const [file, setFile] = useState(null);
    const [fileDataURL, setFileDataURL] = useState(null);
  
    const changeHandler = (e) => {
      const file = e.target.files[0];
      if (!file.type.match(imageMimeType)) {
        alert("Image mime type is not valid");
        return;
      }
      setFile(file);
    }
    useEffect(() => {
      let fileReader, isCancel = false;
      if (file) {
        fileReader = new FileReader();
        fileReader.onload = (e) => {
          const { result } = e.target;
          if (result && !isCancel) {
            setFileDataURL(result)
          }
        }
        fileReader.readAsDataURL(file);
      }
      return () => {
        isCancel = true;
        if (fileReader && fileReader.readyState === 1) {
          fileReader.abort();
        }
      }
  
    }, [file]);

    return(
        <section className=" flex flex-col lg:flex-row py-16 items-center justify-around">
        <form>
        <p>
          <label htmlFor='image'> Browse images  </label>
          <input
            type="file"
            id='image'
            accept='.png, .jpg, .jpeg'
            onChange={changeHandler}
          />
        </p>
        <p>
          <input type="submit" label="Upload" />
        </p>
      </form>
      {fileDataURL ?
        <p className="img-preview-wrapper">
          {
            <img src={fileDataURL} alt="preview" />
          }
        </p> : null}

            <div className="md:hidden">
                
                <div className="mb-8">
                
                    <div className="font-bold text-wendys-blue">El Salvador</div>
                    <div>mifuturo.profesional@wendysal.com.sv</div>
                </div>

                <div>

                    <div className="font-bold text-wendys-blue">Guatemala</div>
                    <div>mifuturo.profesional@wendysal.com.sv</div>
                </div>
            </div>

            <div className="hidden md:flex">

                <div className="py-4 px-6">

                    <div className="font-bold text-wendys-blue mb-4">País</div>
                    <div className="font-bold">El Salvador</div>
                    <div className="font-bold">Guatemala</div>
                </div>

                <div className="py-4 px-6">

                    <div className="font-bold text-wendys-blue mb-4">Correo electrónico</div>
                    <div>mifuturo.profesional@wendysal.com.sv</div>
                    <div>mifuturo.profesional@wendysal.com.sv</div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsContainer;