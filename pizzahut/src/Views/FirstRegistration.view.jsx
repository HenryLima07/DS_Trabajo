import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import FirstRegistrationContainer from "../Components/Registration/FirstRegistration/FirstRegistration.component";
import TitleContainer from "../Components/Shared/Title/TitleContainer.component";
import bg from "/img/bg.svg";

import { getItemLS } from "../Components/Registration/Registration.module";

const localstorage = getItemLS();
const DBData = false;

const FirstRegistrationView =()=>{
    return (
        <div className= {`bg-[url('/img/bg.svg')]`}>
            <Header />
            <TitleContainer 
                Title="¡Nuestra gran familia espera por ti!" 
                subTitle="Únete a nuestro gran equipo de ganadores, crea tu cuenta ingresando tus datos y descubre el mejor lugar para trabajar."
                />
            <FirstRegistrationContainer 
                dataFrom={ DBData ? "dataBase" : "localStorage"} 
                Data={DBData ? DBData : []} />
            <Footer />
        </div>
    )
}

export default FirstRegistrationView;