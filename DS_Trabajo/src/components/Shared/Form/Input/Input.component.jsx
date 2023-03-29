
const Input = ({
    type, 
    name="", 
    required=false, 
    label="", 
    className = "", 
    children,
    innerRef,
    ...rest
})=>{
    return(
        <>
            <label htmlFor={name} className ="font-bold pr-8"  >

                { label }
                { required ? 
                    <label className="text-red-600">* </label>
                    :
                    <></>
                }
            </label>
            <input 
                type={type} 
                name={name}
                className ={`w-full h-10 border-solid border bg-gray-100 border-gray-300 rounded-md ${className}`} 
                {...innerRef} 
                {...rest}

                    />

                {children}
        </>
    )
}

export default Input;