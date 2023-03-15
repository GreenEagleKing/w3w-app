import PasswordRecovery from "./pages/passwordRecovery";
import Home from "./pages/home";
import Result from "./pages/result";

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
        <Route path="/result" element={<Result />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
