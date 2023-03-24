
//importing icon
import HeaderIcon from "../../assets/img/wendy/wendys.svg";
import AsideIcon from "../../assets/img/wendy/logo-wht.svg";

//importing elements
import Header from "../../components/Header/Header.component";
import Main from "../../components/Main/Main.component";
import Footer from "../../components/Footer/Footer.component";
 

const Wendy = ()=>{
    const wendys_assets = {
        "HeaderIcon": HeaderIcon,
        "AsideIcon": AsideIcon,
    }
    return(
        <>
            <Header banner={wendys_assets.HeaderIcon} asideicon = {wendys_assets.AsideIcon} restaurant = "wendys"/>
            <Main />
            <Footer />
        </>
    )
}
export default Wendy;