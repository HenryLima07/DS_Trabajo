
import { Routes, Route} from "react-router-dom"
import './App.css'

//importing views
import Wendy from "./Views/Wendy/Main.view";
import JobsView from "./Views/Wendy/Jobs.view";
import ContactUsView from "./Views/Wendy/ConctactUs.view"; 
import UpdateProfileView from "./Views/Wendy/UpdateProfile.view";
import RegistrationView from "./Views/Wendy/Registration.view";
import RegistrationPt2View from "./Views/Wendy/RegistrationPt2.view";
import MoreInformationView from "./Views/Wendy/MoreInformation.view";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Wendy />} />
      <Route path="/vida-restaurante" element={<MoreInformationView />} />
      <Route path="/plazas" element={<JobsView />} />
      <Route path="/contactos" element={<ContactUsView />} />
      <Route path="/actualiza-perfil" element={<UpdateProfileView />} />
      <Route path="/registro" element={<RegistrationView />} />
      <Route path="/registro-step2" element={<RegistrationPt2View />} />
    </Routes>
  )
}

export default App
