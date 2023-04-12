
const Button = ({className = "", children})=>{
    return(
        <button className={` bg-chinaButtons p-5 rounded-2xl m-3 ${className}`}>
            {children}
        </button>
    )
}

export default Button;