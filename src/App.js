import PasswordRecovery from "./pages/passwordRecovery"
import Home from "./pages/home"
import Result from "./pages/result"
import fetchData from "./hooks/api"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([])
  const [isLocations, setIsLocations] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData()
      setData(fetchedData)
      console.log(fetchedData)
    }
    getData()
  }, [])

  function handleIsLocation() {
    setIsLocations(!isLocations)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home data={data} />} />
        <Route
          path="/map"
          element={
            <PasswordRecovery data={data} handleIsLocation={handleIsLocation} />
          }
        />
        <Route path="/result" element={<Result />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
