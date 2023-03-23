
//importing icon
import HeaderIcon from "../../../img/wendy/wendy_logo.svg";
import AsideIcon from "../../../img/wendy/logo-wht.svg";

//importing elements
import Header from "../../components/Header/Header.component";


const Wendy = ()=>{
    return(
        <Header banner={HeaderIcon} asideicon = {AsideIcon} restaurant = "wendys"/>
    )
}
export default Wendy;