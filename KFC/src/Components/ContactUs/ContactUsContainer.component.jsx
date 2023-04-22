
const ContactUsContainer = ()=>{

    return(
        <main className=" bg-kfc-white text-black flex flex-col lg:flex-row py-16 items-center justify-around">

            <div className="md:hidden">
                
                <div className="mb-8">
                
                    <div className="font-bold ">El Salvador</div>
                    <div>trabajaenkfc@kfc.com.sv</div>
                </div>

                <div>

                    <div className="font-bold ">Guatemala</div>
                    <div>trabajaenkfcgt@kfc.com.gt</div>
                </div>
            </div>

            <div className="hidden md:flex">

                <div className="py-4 px-6">

                    <div className="font-bold  mb-4">País</div>
                    <div className="font-bold">El Salvador</div>
                    <div className="font-bold">Guatemala</div>
                </div>

                <div className="py-4 px-6">

                    <div className="font-bold  mb-4">Correo electrónico</div>
                    <div>trabajaenkfc@kfc.com.sv</div>
                    <div>trabajaenkfcgt@kfc.com.gt</div>
                </div>
            </div>
        </main>
    );
}

export default ContactUsContainer;