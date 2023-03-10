
import {Route, Routes} from 'react-router-dom'
// import { Header } from './Components/Layouts/Header/Header';
// import { Header } from "./components/Layouts/Header/Header";

import { Inicio } from './Components/Page/Inicio/Inicio';
import { CreateAccount } from './Components/Page/CreateAccount/CreateAccount';
import { LogIn } from './Components/Page/LogIn/LogIn';





function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<Inicio/>}></Route>
        <Route path="/CreateAccount" element={<CreateAccount/>}></Route>
        <Route path="/LogIn" element={<LogIn/>}></Route>
        <Route path="*" element="Not Found"></Route>
      </Routes>
    </div>
  )
}

export default App;