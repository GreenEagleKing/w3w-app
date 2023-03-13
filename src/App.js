import PasswordRecovery from "./pages/passwordRecovery";
import Home from "./pages/home";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="/map" element={<PasswordRecovery />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
