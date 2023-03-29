

const Select = ({
    name, 
    className, 
    innerRef, 
    label = "",
    required = false,
    firstOption = "",
    defaultOptions = false,
    children, 
    ...rest })=>{
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
            <select 
                name={name} 
                className={`h-10 boder-solid border bg-gray-100 border-gray-300 rounded-md ${className}`} 
                {...innerRef}
                {...rest}
            >
                <option selected={true}  value="" disabled={true}>{firstOption}</option>
                {
                    defaultOptions ?
                        <>
                            <option value={"S"}>Sí</option>
                            <option value={"N"}>No</option>
                        </>
                        :
                        <></>
                    }
                </select>
            {children}

        </>
    )
}

export default Select;