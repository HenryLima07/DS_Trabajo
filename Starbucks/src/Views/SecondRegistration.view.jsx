
import SecondRegistrationContainer from "../Components/Registration/SecondRegistration/SecondRegistration.component";
import Title from "../Components/Shared/Title/TitleContainer.component";
import Footer from "../Components/Shared/Footer/Footer.component";

const SecondRegistration =()=>{
    return(
        <div>
            <Title Title= "Únete a Starbucks" subTitle="Información Adicional"/>
            <SecondRegistrationContainer />
            <Footer />
        </div>
    )
}

export default SecondRegistration;