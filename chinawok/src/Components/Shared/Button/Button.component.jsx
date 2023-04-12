
const Button = ({className = "", children})=>{
    return(
        <button className={` bg-chinaButtons text-white p-5 ${className}`}>
            {children}
        </button>
    )
}

export default Button;