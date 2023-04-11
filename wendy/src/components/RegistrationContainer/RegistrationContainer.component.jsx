import FirstRegistration from "./FirstRegistration/FirstRegistration.component";

//modules
import { getItemLS } from "./Registration.module";

//getting data from local storage
const localStorageData = getItemLS();
const DBData = false;

const RegistrationCotainer = ()=>{
    return(
        <section>
            <FirstRegistration 
                 data={DBData ? DBData : []} 
                dataFrom={DBData ? "database" : "localstorage"}
                />
        </section>
    )
}

export default RegistrationCotainer;