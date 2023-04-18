
import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import ContactUsContainer from "../Components/ContactUs/ContactUsContainer.component";
import TitleContainer from "../Components/Shared/Title/TitleContainer.component";

const ContactUs = ()=>{
    return(
        <div>

            <Header />
            <TitleContainer 
                Title="¿Deseas ponerte en contacto con nosotros?" 
                subTitle="Puedes escribirnos a los siguientes correos, dependiendo del país en que te encuentres:"
                />
            <ContactUsContainer />
            <Footer />
        </div>
    )
}

export default ContactUs;