import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import UpdateProfileContainer from "../Components/UpdateProfile/UpdateProfile.component";
import TitleContainer from "../Components/Shared/Title/TitleContainer.component";

const UpdateProfileView =()=>{
    return(
        <div>
            <Header />
            <TitleContainer Title="Actualiza tu información" subTitle="Para que tengas acceso a tu CV debes ingresar tus datos." />
            <UpdateProfileContainer />
            <Footer />
        </div>
    )
}

export default UpdateProfileView;