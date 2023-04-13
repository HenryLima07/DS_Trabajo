import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import Title from "../Components/Shared/Title/TitleContainer.component";
import SecondRegistrationContainer from "../Components/Registration/SecondRegistration/SecondRegistration.component";

const RegistrationPt2 = ()=>{
    return(
        <section>
            <Header />
            <Title Title="¡Tenés todo el talento que andamos buscando!" />
            <SecondRegistrationContainer />
            <Footer />
        </section>
    );
}

export default RegistrationPt2;