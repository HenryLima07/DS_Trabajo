import { Routes, Route } from "react-router-dom"

//views
import Main from "./Views/Main.view";
import Registration from "./Views/Registration.view";
import RegistrationPt2 from "./Views/RegistrationPt2.view";
import UpdateProfile from "./Views/UpdateProfile.view";
import Jobs from "./Views/Jobs.view";
import ContactUs from "./Views/ContactUs.view";

function App() {
  return (
    <Routes>
        <Route path="/" element={<Main />}/>
        <Route path="/registro" element={<Registration />}/>
        <Route path="/registro-step-2" element={<RegistrationPt2 />}/>
        <Route path="/actualiza-perfil" element={<UpdateProfile />}/>
        <Route path="/plazas" element={<Jobs />}/>
        <Route path="/contactos" element={<ContactUs />}/>
    </Routes>
  )
}

export default App
