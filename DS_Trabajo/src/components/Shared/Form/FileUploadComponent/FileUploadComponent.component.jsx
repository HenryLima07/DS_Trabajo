

const FileUploadComponentContainer = ({innerRef})=>{
    return(
        <label className="bg-wendys-blue text-white py-3 px-9 rounded cursor-pointer">
            Subir foto
            <input type="file" className="hidden" accept=".jpg .png .PNG .JPG" {...innerRef} />
        </label>
    )
}

export default FileUploadComponentContainer;