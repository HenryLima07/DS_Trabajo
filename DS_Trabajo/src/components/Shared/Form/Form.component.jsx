

const Form = ({children, ...rest})=>{
    return(
        <form action="" {...rest}>
            {children}
        </form>
    )
}

export default Form;