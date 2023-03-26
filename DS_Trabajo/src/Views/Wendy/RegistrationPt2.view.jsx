import Header from "../../components/Shared/Header/Header.component";
import Footer from "../../components/Shared/Footer/Footer.component";
import SecondRegistrationContainer from "../../components/RegistrationContainer/SecondRegistration/SecondRegistration.component";
import Title from "../../components/Shared/Title/TitleContainer.component";


const RegistrationPt2View = ()=>{
    return(
        <>
            <Header />
                <Title Title="!Tenés todo el talento que andamos buscando!" />
                <SecondRegistrationContainer />
            <Footer />

        </>
    )
}
export default RegistrationPt2View;