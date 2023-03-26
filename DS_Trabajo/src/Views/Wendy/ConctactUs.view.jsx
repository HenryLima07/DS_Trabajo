import Header from "../../components/Shared/Header/Header.component"
import Footer from "../../components/Shared/Footer/Footer.component"
import Title from "../../components/Shared/Title/TitleContainer.component";
import ContactUsContainer from "../../components/ContactUs/ContactUsContainer.component";

const ContactUsView = ()=>{
    return(
        <>
            <Header />
                <Title 
                    Title="¿Deseas ponerte en contacto con nosotros?" 
                    subTitle="Puedes escribirnos al siguiente correo:" />
                    <ContactUsContainer />
            <Footer />
        </>
    )
}
export default ContactUsView;