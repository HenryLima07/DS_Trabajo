import Options from "./Options/Options.component";
import { useState, useEffect } from "react";
import { castData } from "./Select.module";


const Select = ({
    name, 
    className, 
    innerRef, 
    label = "",
    required = false,
    firstOption = "",
    Data=[],
    children, 
    defaultValue,
    ...rest })=>{

    //setting mapped data comparing by name in castData
    const mappedOptions = castData(Data, name).map((element, index) => <Options key={index} value={element.id}>{element.value}</Options>);

    const [SelectedIndex, SetSelectedIndex] = useState("");

    useEffect(() => {
        if(!defaultValue) return;
        SetSelectedIndex(defaultValue);

    }, []);
    
    const changeHandler = e => {
        SetSelectedIndex(e.target.value);
    };
    
      
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
                value = {SelectedIndex} onChangeCapture = {changeHandler}

                {...innerRef}
                {...rest}
            >
            <>
                <Options value="">{firstOption}</Options> 
                {
                    Data && Data.length > 0 ?
                        mappedOptions
                        :
                        <></>
                }
                </>
            </select>
            {
                children
            }

        </>
    )
}

export default Select;
