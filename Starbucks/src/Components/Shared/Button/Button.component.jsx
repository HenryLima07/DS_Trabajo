
const Button = ({className = "", children, rest})=>{
    return(
        <button className={` bg-starbucks-Green text-white p-5 ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;