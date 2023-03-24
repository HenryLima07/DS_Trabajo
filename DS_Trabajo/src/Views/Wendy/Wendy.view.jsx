
//importing icon
import HeaderIcon from "../../assets/img/wendy/wendy_logo.svg";
import AsideIcon from "../../assets/img/wendy/logo-wht.svg";

//importing elements
import Header from "../../components/Header/Header.component";
import TrabajaContainer from "../../components/Main/TrabajaContainer/TrabajaContainer.component";
import VidaRestaurantContainer from "../../components/Main/VidaRestaurantContainer/VidaRestaurantContainer.component";

const Wendy = ()=>{
    const wendys_assets = {
        "HeaderIcon": HeaderIcon,
        "AsideIcon": AsideIcon,
    }
    return(
        <>
            <Header banner={wendys_assets.HeaderIcon} asideicon = {wendys_assets.AsideIcon} restaurant = "wendys"/>
            <section>
                <TrabajaContainer />
                <VidaRestaurantContainer />
            </section>

        </>
    )
}
export default Wendy;