import Title from "../Components/Shared/Title/TitleContainer.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import UpdateProfileContainer from "../Components/UpdateProfile/UpdateProfile.component";
import Header from "../Components/Shared/Header/Header.component";


const UpdateProfile = ()=>{
    return (
        <div>
            <Header />
            <Title Title="Actualiza tu información" 
            subTitle="Para que tengas acceso a tu CV debes ingresar tus datos." />
            <UpdateProfileContainer />
            <Footer />
        </div>
    )
}

export default UpdateProfile;