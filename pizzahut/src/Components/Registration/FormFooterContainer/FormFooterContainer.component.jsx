
const FormFooterContainer = ({className, children}) =>{
    return(

        <div className=" bg-pizzaRed flex flex-col lg:flex-row px-10 lg:px-16 py-6 w-full">
                
        <div className="flex flex-row justify-between w-full">
        
            <div className = { `w-full text-xl text-white ${className}  font-avenirMedium ` }>
                {children}
            </div> 
        </div>
    </div>
    )
}

export default FormFooterContainer;