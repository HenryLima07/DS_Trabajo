import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import ContactUsContainer from "../Components/ContactUS/ContactUs.component";
import Title from "../Components/Shared/Title/TitleContainer.component";

const ContactUs  = ()=>{
    return(
        <section>
            <Header />
            <Title Title="¿Deseas ponerte en contacto con nosotros?" subTitle="Puedes escribirnos al siguiente correo:"/>
            <ContactUsContainer />
            <Footer />
        </section>
    )
}


export default ContactUs;