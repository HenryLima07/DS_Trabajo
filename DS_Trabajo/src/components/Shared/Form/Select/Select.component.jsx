import Options from "./Options/Options.component";

const Select = ({
    name, 
    className, 
    innerRef, 
    label = "",
    required = false,
    firstOption = "",
    defaultOptions = false,
    Data=[],
    children, 
    ...rest })=>{

    const mappedOptions = Data.map((element, index) => <Options key={index} value={element.id}>{element.value}</Options>);
      
        return(
        <>
            <label htmlFor={name} className ="font-bold pr-8"  >

                { label }
                { required ? 
                    <label className="text-red-600">* </label>
                :
                    <></>
                    }:
            </label>
            <select 
                name={name} 
                className={`h-10 boder-solid border bg-gray-100 border-gray-300 rounded-md ${className}`} 
                {...innerRef}
                {...rest}
            >
            <>
                <Options selected={true}>{firstOption}</Options> 
                {
                    defaultOptions ?
                        <>
                            <Options value="S">Sí</Options>
                            <Options value="N">No</Options>
                        </>
                        :
                        <></>
                    }
                {
                    Data && Data.length > 0 ?
                        mappedOptions
                        :
                        <></>
                }
                </>
                </select>
            {children}

        </>
    )
}

export default Select;