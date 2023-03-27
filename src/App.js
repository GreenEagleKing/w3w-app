import PasswordRecovery from "./pages/passwordRecovery"
import Home from "./pages/home"
import Result from "./pages/result"
import SetLocations from "./pages/setLocations"
import fetchData from "./hooks/api"

import { db } from "./firebase"
import { uid } from "uid"
import { set, ref } from "firebase/database"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([])
  const [isLocation, setIsLocation] = useState(false)

  useEffect(() => {
    const getData = async () => {
      const fetchedData = await fetchData()
      setData(fetchedData)
      console.log(fetchedData)
    }
    getData()
  }, [])

  function handleIsLocation() {
    setIsLocation(!isLocation)
  }

  // temp write to db
  function createUser(name) {
    const uuid = uid()
    set(ref(db, `/${uuid}`), {
      username: name,
      id: uuid,
      what3wordLocations: {
        locationOne: "",
        locationTwo: "",
      },
    })
    console.log(name)
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
        <Route path="/result" element={<Result isLocation={isLocation} />} />
        <Route
          path="/setLocations"
          element={<SetLocations createUser={createUser} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
