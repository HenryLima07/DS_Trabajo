

const FileUploadComponentContainer = ({innerRef, onImageChangeHandler})=>{
    return(
        <label className="bg-wendys-blue text-white py-3 px-9 rounded cursor-pointer">
            Subir foto
            <input type="file" onChange={onImageChangeHandler} className="hidden" accept=".jpg .png .PNG .JPG" {...innerRef} />
        </label>
    )
}

export default FileUploadComponentContainer;