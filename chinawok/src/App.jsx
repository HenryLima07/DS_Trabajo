import { Route, Routes } from "react-router-dom"

import Registration from "./Views/Registration.view";
import RegistrationPt2 from "./Views/RegistrationPt2.view";
import UpdateProfile from "./Views/UpdateProfile.view";
import ContactUs from "./Views/ContactUs.view";
import MainView from "./Views/Main.view";

function App() {

  return (
    <Routes>
        <Route path="/" element={<MainView />} />
        <Route path="/registro" element={<Registration />} />
        <Route path="/registro-step-2" element={<RegistrationPt2 />} />
        <Route path="/actualiza-perfil" element={<UpdateProfile />} />
        <Route path="/contactos" element={<ContactUs />} />
    </Routes>
  )
}

export default App
