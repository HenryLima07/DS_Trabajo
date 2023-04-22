
const Button = ({className = "", children, rest})=>{
    return(
        <button className={` bg-kfc-red-buttons hover:bg-kfc-red transition-colors text-white p-5 ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;