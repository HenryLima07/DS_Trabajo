
//importing view elements
import Header from "../../components/Shared/Header/Header.component";
import Footer from "../../components/Shared/Footer/Footer.component";
import Title from "../../components/Shared/Title/TitleContainer.component";
import UpdateProfileContainer from "../../components/UpdateProfileContainer.component.jsx/UpdateProfileContainer.component";

const UpdateProfileView =()=>{
    return(
        <>
            <Header sticky={120} />
                <Title Title="¡Tenés todo el talento que andamos buscando!" />
                <UpdateProfileContainer />
            <Footer />
        </>
    );
}

export default UpdateProfileView;