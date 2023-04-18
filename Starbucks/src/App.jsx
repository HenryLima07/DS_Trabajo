import './App.css'
import { Routes, Route } from 'react-router-dom';

//views
import Main from './Views/Main.view';
import FirstRegistration from './Views/FirstRegistration.view';
import SecondRegistration from './Views/SecondRegistration.view';
import UpdateProfile from './Views/UpdateProfile.view';
import Jobs from './Views/Jobs.view';
import ContactUs from './Views/ContactUs.view';

function App() {

  return (
    <Routes>
      <Route path="/" element={<Main />}/>
      <Route path="/registro" element={<FirstRegistration />}/>
      <Route path="/registro-step-2" element={<SecondRegistration />}/>
      <Route path="/actualiza-perfil" element={<UpdateProfile />}/>
      <Route path="/plazas" element={<Jobs />}/>
      <Route path="/contactos" element={<ContactUs />}/>
    </Routes>
    )
}

export default App
