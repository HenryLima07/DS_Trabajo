import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import Title from "../Components/Shared/Title/TitleContainer.component";
import SecondRegistrationContainer from "../Components/Registration/SecondRegistration/SecondRegistration.component";
import bg from "/img/bg.svg";

const RegistrationPt2 = ()=>{
    return(
        <div className= {`bg-[url('/img/bg.svg')]`}>
            <Header />
            <Title Title="¡Tenés todo el talento que andamos buscando!" />
            <SecondRegistrationContainer />
            <Footer />
        </div>
    );
}

export default RegistrationPt2;