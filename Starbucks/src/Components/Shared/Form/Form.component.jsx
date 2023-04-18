import { useForm } from "react-hook-form";

const Form = ({children, ...rest})=>{
    return(
        <form {...rest}>
            {children}
        </form>
    )
}

export default Form;