
import SecondRegistrationContainer from "../Components/Registration/SecondRegistration/SecondRegistration.component";
import Title from "../Components/Shared/Title/TitleContainer.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import Header from "../Components/Shared/Header/Header.component";

const SecondRegistration =()=>{
    return(
        <div>
            <Header />
            <Title Title= "Únete a Starbucks" subTitle="Información Adicional"/>
            <SecondRegistrationContainer />
            <Footer />
        </div>
    )
}

export default SecondRegistration;