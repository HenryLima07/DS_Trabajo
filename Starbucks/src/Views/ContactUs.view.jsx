
import Title from "../Components/Shared/Title/TitleContainer.component";
import ContactUsContainer from "../Components/ContactUs/ContactUs.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import Header from "../Components/Shared/Header/Header.component";

const ContactUs =()=>{
    return(
        <div>
        <Header />
            <Title Title="Contáctanos" />
                <div className="flex flex-col justify-center items-center px-4 pt-8 font-avenirMedium">
                    <div>Si tienes preguntas, no dudes en contactarnos en las siguientes opciones a continuación.</div>
                    <div>Simplemente seleccione el método de comunicación deseado y envíenos sus preguntas, dudas y/o comentarios.</div>
                </div>
            <ContactUsContainer />
            <Footer />
        </div>
    )
}

export default ContactUs;