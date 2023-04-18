
const FormFooterContainer = ({className, children}) =>{
    return(

        <div className=" bg-kfc-white flex flex-col lg:flex-row px-10 lg:px-16 py-6 w-full">
                
        <div className="flex flex-row justify-between w-full">
            {/* 
            <div className=" w-full text-right font-wendysSimpleFont text-xl text-white"></div>  */}
        
            <div className = { `w-full font-wendysSimpleFont text-xl text-kfc-gray ${className}` }>
                {children}
            </div> 
        </div>
    </div>
    )
}

export default FormFooterContainer;