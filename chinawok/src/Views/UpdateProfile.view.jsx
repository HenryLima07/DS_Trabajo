import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import UpdateProfileContainer from "../Components/UpdateProfile/UpdateProfile.component";
import Title from "../Components/Shared/Title/TitleContainer.component";

const UpdateProfile = ()=>{
    return(
        <section>
            <Header />
            <Title Title="¡Tenés todo el talento que andamos buscando!" />
            <UpdateProfileContainer />
            <Footer />
        </section>
    );
}

export default UpdateProfile;