const ErrorElement = ({error, children, ...rest})=>{
    return(
        <span role={"alert"} {...rest} className={`text-red-600`}>
            {children}
        </span>
    )
}

export default ErrorElement;