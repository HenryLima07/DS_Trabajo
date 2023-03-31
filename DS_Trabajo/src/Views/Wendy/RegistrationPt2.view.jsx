import Header from "../../components/Shared/Header/Header.component";
import Footer from "../../components/Shared/Footer/Footer.component";
import SecondRegistrationContainer from "../../components/RegistrationContainer/SecondRegistration/SecondRegistration.component";
import Title from "../../components/Shared/Title/TitleContainer.component";


//TODO: set data from api as main data when updating persona information

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