import PasswordRecovery from "./pages/passwordRecovery"
import Home from "./pages/home"
import Result from "./pages/result"
import SetLocations from "./pages/setLocations"
import fetchData from "./hooks/api"

import { db } from "./firebase"
import { uid } from "uid"
import { set, ref, update } from "firebase/database"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([])
  const [isLocation, setIsLocation] = useState(false)
  const [currentUserId, setCurrentUserId] = useState("")

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
    setCurrentUserId(uuid)
  }

  function updateLocations(loc1, loc2) {
    update(ref(db, `/${currentUserId}`), {
      what3wordLocations: {
        locationOne: loc1,
        locationTwo: loc2,
      },
    })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home data={data} />} />
        <Route
          path="/map"
          element={
            <PasswordRecovery
              data={data}
              handleIsLocation={handleIsLocation}
              updateLocations={updateLocations}
            />
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
