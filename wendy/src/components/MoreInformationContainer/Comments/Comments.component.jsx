const Comments =({
    className = "",
    Empleado = "",
    Puesto = "",
    children
})=>{
    return(
        <div className={`w-1/2 hidden opacity-0 ${className}`}>
            <div className="flex flex-col items-center">

                <p className="text-center italic text-4xl w-3/4">
                {children}</p>
                <br />
                <br />
                <p className="text-wendys-background text-center text-lg">{Empleado}<br />{Puesto}</p>
            </div>
        </div>

    );
}
export default Comments;