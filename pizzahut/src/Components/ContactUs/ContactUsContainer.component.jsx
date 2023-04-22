
const ContactUsContainer = ()=>{

    return(
        <section className=" flex flex-col lg:flex-row py-16 items-center justify-around bg-pizzaGrayAlt mb-12">

            <div className="md:hidden">
                
                <div className="mb-8">
                
                    <div className="font-bold text-pizzaTextGray">El Salvador</div>
                    <div>empleosph@pizzahut.com.sv</div>
                </div>

                <div>

                    <div className="font-bold text-pizzaTextGray">Guatemala</div>
                    <div>empleosgt@pizzahut.com.gt</div>
                </div>
            </div>

            <div className="hidden md:flex">

                <div className="py-4 px-6">

                    <div className="font-bold text-pizzaTextGray mb-4">País</div>
                    <div className="font-bold text-pizzaTextGray">El Salvador</div>
                    <div className="font-bold text-pizzaTextGray">Guatemala</div>
                </div>

                <div className="py-4 px-6">

                    <div className="font-bold text-pizzaTextGray mb-4">Correo electrónico</div>
                    <div className="text-pizzaTextGray">empleosph@pizzahut.com.sv</div>
                    <div className="text-pizzaTextGray">empleosgt@pizzahut.com.gt</div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsContainer;