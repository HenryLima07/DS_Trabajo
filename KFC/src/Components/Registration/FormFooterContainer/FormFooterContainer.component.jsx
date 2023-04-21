
const FormFooterContainer = ({className, children}) =>{
    return(

        <div className=" bg-gray-200 flex flex-col lg:flex-row px-10 lg:px-16 py-6 w-full">
                
        <div className="flex flex-row justify-between w-full">
            {/* 
            <div className=" w-full text-right font-wendysSimpleFont text-xl text-white"></div>  */}
        
            <div className = { `w-full font-wendysSimpleFont text-xl text-black font-ronnia ${className}` }>
                {children}
            </div> 
        </div>
    </div>
    )
}

export default FormFooterContainer;