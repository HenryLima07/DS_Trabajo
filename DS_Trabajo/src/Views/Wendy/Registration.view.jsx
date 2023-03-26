import Header from "../../components/Shared/Header/Header.component";
import Footer from "../../components/Shared/Footer/Footer.component";
import Title from "../../components/Shared/Title/TitleContainer.component";
import RegistrationCotainer from "../../components/RegistrationContainer/RegistrationContainer.component";

const RegistrationView = ()=>{
    return(
        <>
            <Header />
                <Title Title="!Tenés todo el talento que andamos buscando!" />
                <RegistrationCotainer />
            <Footer />
        </>
    );
}

export default RegistrationView;