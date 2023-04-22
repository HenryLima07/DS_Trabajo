import Header from "../Components/Shared/Header/Header.component";
import Footer from "../Components/Shared/Footer/Footer.component";
import UpdateProfileContainer from "../Components/UpdateProfile/UpdateProfile.component";
import TitleContainer from "../Components/Shared/Title/TitleContainer.component";
import bg from "/img/bg.svg";

const UpdateProfileView =()=>{
    return(
        <div className= {`bg-[url('/img/bg.svg')]`}>
            <Header />
            <TitleContainer Title="Actualiza tu información" subTitle="Para que tengas acceso a tu CV debes ingresar tus datos." />
            <UpdateProfileContainer />
            <Footer />
        </div>
    )
}

export default UpdateProfileView;