

const FileUploadComponentContainer = ({innerRef, ...rest})=>{
    return(
        <label className="bg-pizzaRed text-white py-4 px-[2.2rem] rounded cursor-pointer">
            Subir foto
            <input type="file" className="hidden" accept=".jpg, .png, jpeg., .PNG, .JPG, .JPEG" {...innerRef} {...rest}/>
        </label>
    )
}

export default FileUploadComponentContainer;