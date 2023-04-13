
const ContactUsContainer = ()=>{

    return(
        <section className=" flex flex-col lg:flex-row py-16 items-center justify-around">
        
            <div className="md:hidden">
                <div className="mb-8 flex">
                    <div className="text-chinaGreen">El Salvador</div>
                    <div>empleos@chinawok.com.sv</div>
                </div>
            </div>

            <div className="hidden md:flex">
                <div className="py-4 px-6">
                    <div className="text-chinaGreen mb-4">País</div>
                    <div className="">El Salvador</div>
                </div>
                <div className="py-4 px-6">
                    <div className="text-chinaGreen mb-4">Correo electrónico</div>
                    <div>empleos@chinawok.com.sv</div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsContainer;