
const FormFooterContainer = ({className, children}) =>{
    return(

        <div className=" bg-starbucks-Gray flex flex-col lg:flex-row px-10 lg:px-16 py-6 w-full font-avenirMedium">
                
        <div className="flex flex-row justify-between w-full">
            {/* 
            <div className=" w-full text-right font-wendysSimpleFont text-xl text-white"></div>  */}
        
            <div className = { `w-full text-xl text-black hover:text-starbucks-Green transition-colors ${className}` }>
                {children}
            </div> 
        </div>
    </div>
    )
}

export default FormFooterContainer;