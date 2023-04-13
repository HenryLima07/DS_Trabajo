import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import Title from "../Components/Shared/Title/TitleContainer.component";
import FirstRegistrationContainer from "../Components/Registration/FirstRegistration/FirstRegistration.component";  

//modules
import { getItemLS } from "../Components/Registration/Registration.module";

//getting data from local storage
const localStorageData = getItemLS();
const DBData = false;


const Registration = ()=>{
    return(
        <section>
            <Header />
            <Title Title="¡Tenés todo el talento que andamos buscando!" />
            <FirstRegistrationContainer 
                 data={DBData ? DBData : []} 
                dataFrom={DBData ? "database" : "localstorage"} />
            <Footer />
        </section>
    );
}

export default Registration;