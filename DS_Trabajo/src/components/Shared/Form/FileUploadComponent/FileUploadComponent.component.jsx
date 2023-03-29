

const FileUploadComponentContainer = ({innerRef})=>{
    return(
        <label htmlFor="uploadElement" className="bg-wendys-blue text-white py-4 px-8 rounded cursor-pointer">
            Subir una foto
            <input type="file" className="hidden" accept=".jpg .png .PNG .JPG" {...innerRef} />
        </label>
    )
}

export default FileUploadComponentContainer;