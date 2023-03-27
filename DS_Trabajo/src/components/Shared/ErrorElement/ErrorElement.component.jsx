const ErrorElement = ({error, children, ...rest})=>{
    return(
        <span role={"alert"} {...rest} className={`hidden`}>
            {children}
        </span>
    )
}

export default ErrorElement;