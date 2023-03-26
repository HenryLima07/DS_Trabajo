import Header from "../../components/Shared/Header/Header.component"
import Footer from "../../components/Shared/Footer/Footer.component"
import MoreInformationContainer from "../../components/MoreInformationContainer/MoreInformationContainer.component";
import Title from "../../components/Shared/Title/TitleContainer.component";

const MoreInformationView = ()=>{

    return(
        <>
            <Header />
                <Title Title="VIDA DE RESTAURANTE" />
                <MoreInformationContainer />
            <Footer />
        </>
    )
}

export default MoreInformationView;