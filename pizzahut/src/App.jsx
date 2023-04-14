import { Routes, Route } from "react-router-dom";

//import views
import MainView from "./Views/Main.view";
import FirstRegistrationView from "./Views/FirstRegistration.view";
import SecondRegistrationView from "./Views/SecondRegistration.view";
import UpdateProfileView from "./Views/UpdateProfile.view";
import ContactUsView from "./Views/ContactUs.view";

function App() {

  return (
    <Routes>
      <Route path={"/"} element={<MainView />}/>
      <Route path={"/registro"} element={<FirstRegistrationView />}/>
      <Route path={"/registro-step-2"} element={<SecondRegistrationView />}/>
      <Route path={"/actualiza-perfil"} element={<UpdateProfileView />} />
      <Route path={"/contactos"} element={<ContactUsView />} />
    </Routes>
  )
}

export default App
