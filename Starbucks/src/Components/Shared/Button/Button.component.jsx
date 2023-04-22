
const Button = ({className = "", children, rest})=>{
    return(
        <button className={` bg-starbucks-red-buttons hover:bg-starbucks-Green transition-colors text-white p-5 ${className}`} {...rest}>
            {children}
        </button>
    )
}

export default Button;