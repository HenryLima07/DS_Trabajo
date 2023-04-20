import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import FirstRegistrationContainer from "../Components/Registration/FirstRegistration/FirstRegistration.component";
import TitleContainer from "../Components/Shared/Title/TitleContainer.component";
import bg from "/img/bg.svg";

const FirstRegistrationView =()=>{
    return (
        <div className= {`bg-[url('${bg}')]`}>
            <Header />
            <TitleContainer 
                Title="¡Nuestra gran familia espera por ti!" 
                subTitle="Únete a nuestro gran equipo de ganadores, crea tu cuenta ingresando tus datos y descubre el mejor lugar para trabajar."
                />
            <FirstRegistrationContainer />
            <Footer />
        </div>
    )
}

export default FirstRegistrationView;