
const ContactUsContainer = ()=>{

    return(
        <main className=" bg-white text-kfc-gray flex flex-col lg:flex-row py-16 pt-8 items-center justify-around">
            <div className="md:hidden">
                
                <div className="mb-8">
                
                    <div className="font-bold">El Salvador</div>
                    <div className="font-avenirMedium" >seleccionpartners@starbucks.com.sv</div>
                </div>
                <div className="mb-8">

                    <div className="font-bold ">Guatemala</div>
                    <div className="font-avenirMedium">tracing@starbucks.com.gt</div>
                </div>

                <div className="mb-8">

                    <div className="font-bold ">Costa Rica</div>
                    <div className="font-avenirMedium">seleccionpartnerspa@starbucks.co.cr</div>
                </div>
                <div>
                    <div className="font-bold ">Panamá</div>
                    <div className="font-avenirMedium">seleccionpartnerspa@starbucks.pa</div>
                </div>
            </div>

            <div className="hidden md:flex">

                <div className="py-4 px-6">

                    <div className="font-bold  mb-4">País</div>
                    <div className="font-bold">El Salvador</div>
                    <div className="font-bold">Guatemala</div>
                    <div className="font-bold">Costa Rica</div>
                    <div className="font-bold">Panamá</div>
                </div>

                <div className="py-4 px-6">

                    <div className="font-bold  mb-4">Correo electrónico</div>
                    <div className="font-avenirMedium">seleccionpartners@starbucks.com.sv</div>
                    <div className="font-avenirMedium">tracing@starbucks.com.gt</div>
                    <div className="font-avenirMedium">seleccionpartnerspa@starbucks.co.cr</div>
                    <div className="font-avenirMedium">seleccionpartnerspa@starbucks.pa</div>
                </div>
            </div>
        </main>
    );
}

export default ContactUsContainer;