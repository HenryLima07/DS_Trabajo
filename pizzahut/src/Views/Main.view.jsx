
import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import MainContainer from "../Components/Main/Main.component";
import bg from "/img/bg.svg";

const MainView = ()=>{
    return(
        <div className= {`bg-[url('${bg}')]`}>
            <Header />
            <MainContainer/>
            <Footer />
        </div>
    )
}

export default MainView;