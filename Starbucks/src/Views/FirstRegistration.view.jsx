import Title from "../Components/Shared/Title/TitleContainer.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import FirstRegistrationContainer from "../Components/Registration/FirstRegistration/FirstRegistration.component"

//modules
import { getItemLS } from "../Components/Registration/Registration.module";
import Header from "../Components/Shared/Header/Header.component";

//getting data from local storage
const localStorageData = getItemLS();
const DBData = false;


const FirstRegistration =()=>{
    return(
        <div>
            <Header />
            <Title Title="Únete a Starbucks" subTitle="Para unirte debes registrarte ingresando los siguientes datos:" />
            <FirstRegistrationContainer 
                 data={DBData ? DBData : []} 
                dataFrom={DBData ? "database" : "localstorage"} />

            <Footer />
        </div>
    )
}

export default FirstRegistration;