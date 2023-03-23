
import { Routes, Route} from "react-router-dom"
import './App.css'

//importing views
import Wendy from "./assets/Views/Wendy/Wendy.view";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Wendy />} />
    </Routes>
  )
}

export default App
