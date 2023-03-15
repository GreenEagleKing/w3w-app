import PasswordRecovery from "./pages/passwordRecovery";
import Home from "./pages/home";
import Result from "./pages/result";
import fetchData from "./hooks/api";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData()
      setData(fetchedData)
      console.log(fetchedData)
    }
    getData()
    
  }, [])

  console.log(data.user1)

  

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
