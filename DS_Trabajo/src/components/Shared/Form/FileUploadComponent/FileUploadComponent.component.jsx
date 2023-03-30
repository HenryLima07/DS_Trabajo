

const FileUploadComponentContainer = ({innerRef, ...rest})=>{
    return(
        <label className="bg-wendys-blue text-white py-3 px-9 rounded cursor-pointer">
            Subir foto
            <input type="file" className="hidden" accept=".jpg, .png, jpeg., .PNG, .JPG, .JPEG" {...innerRef} {...rest}/>
        </label>
    )
}

export default FileUploadComponentContainer;