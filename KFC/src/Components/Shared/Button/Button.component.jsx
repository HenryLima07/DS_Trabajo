
const Button = ({className = "", children, rest})=>{
    return(
        <button className={` bg-kfc-red-buttons text-white p-5 ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;