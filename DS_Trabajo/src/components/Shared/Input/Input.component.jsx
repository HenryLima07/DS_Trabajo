
const Input = ({
    type, 
    name="", 
    required=false, 
    label="", 
    firstOption="", 
    closeOptions=false, 
    className = "", 
    children,
    ...rest
})=>{
    return(
        <>
            <label htmlFor={name} className ="font-bold pr-8"  >

                {label}
                { required ? 
                    <label className="text-red-600">* </label>
                    :
                    <></>
                }
                :
            </label>
           {
            type ? 
                <input type={type} name={name} {...rest} className ={`w-full h-10 border-solid border bg-gray-100 border-gray-300 rounded-md ${className}`}/>

                :
                
                <select id="paises" name="paises" className={`h-10 boder-solid border bg-gray-100 border-gray-300 rounded-md ${className}`} 
                    {...rest}>
                    <option selected={true}  value="" disabled = {true}>{firstOption}</option>
                    {
                        closeOptions ?
                            <>
                                <option value={"S"}>Sí</option>
                                <option value={"N"}>No</option>
                            </>
                            :
                            <></>
                    }
                </select>
          
                }
                {children}
        </>
    )
}

export default Input;