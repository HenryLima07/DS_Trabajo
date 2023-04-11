import TrabajaContainer from "./TrabajaContainer/TrabajaContainer.component";
import VidaRestaurantContainer from "./VidaRestaurantContainer/VidaRestaurantContainer.component";
import HistoriaContainer from "./HistoriaContainer/HistoriaContainer.component";
import ValoresContainer from "./ValoresContainer/ValoresContainer.component";
import BeneficiosContainer from "./BeneficiosContainer/BeneficiosContainer.component";

const Main = ()=>{
    return(
        <main>
            <TrabajaContainer />
            <VidaRestaurantContainer />
            <HistoriaContainer />
            <ValoresContainer />
            <BeneficiosContainer />

        </main>
    )
}

export default Main;