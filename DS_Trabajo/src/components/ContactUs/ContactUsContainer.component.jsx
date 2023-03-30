
import React from "react";

const ContactUsContainer = ()=>{

    return(
        <section className=" flex flex-col lg:flex-row py-16 items-center justify-around">
            <div className="md:hidden">
                
                <div className="mb-8">
                
                    <div className="font-bold text-wendys-blue">El Salvador</div>
                    <div>mifuturo.profesional@wendysal.com.sv</div>
                </div>

                <div>

                    <div className="font-bold text-wendys-blue">Guatemala</div>
                    <div>mifuturo.profesional@wendysal.com.sv</div>
                </div>
            </div>

            <div className="hidden md:flex">

                <div className="py-4 px-6">

                    <div className="font-bold text-wendys-blue mb-4">País</div>
                    <div className="font-bold">El Salvador</div>
                    <div className="font-bold">Guatemala</div>
                </div>

                <div className="py-4 px-6">

                    <div className="font-bold text-wendys-blue mb-4">Correo electrónico</div>
                    <div>mifuturo.profesional@wendysal.com.sv</div>
                    <div>mifuturo.profesional@wendysal.com.sv</div>
                </div>
            </div>
        </section>
    );
}

export default ContactUsContainer;