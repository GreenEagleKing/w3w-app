import PasswordRecovery from "./pages/passwordRecovery"
import Home from "./pages/home"
import Result from "./pages/result"
import SetLocations from "./pages/setLocations"
import fetchData from "./hooks/api"

import { db } from "./firebase"
import { uid } from "uid"
import { set, ref, update, get } from "firebase/database"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [data, setData] = useState([])
  const [isLocation, setIsLocation] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [isNewUser, setIsNewUser] = useState(false)
  const [isCreated, setIsCreated] = useState(false)

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

  function handleIsNewUser() {
    setIsNewUser(!isNewUser)
  }

  function handleIsCreated() {
    setIsCreated(!isCreated)
  }

  // temp write to db
  function createUser(name) {
    const uuid = uid()
    set(ref(db, `/${name}`), {
      username: name,
      id: uuid,
      what3wordLocations: {
        locationOne: "",
        locationTwo: "",
      },
    }).then(() => {
      setCurrentUser({
        username: name,
        id: uuid,
        what3wordLocations: {
          locationOne: "",
          locationTwo: "",
        },
      })
    })
    return currentUser
  }

  console.log(currentUser)

  function updateLocations(loc1, loc2) {
    update(ref(db, `/${currentUser.username}`), {
      what3wordLocations: {
        locationOne: loc1,
        locationTwo: loc2,
      },
    }).then(() => {
      get(ref(db, `/${currentUser.username}`)).then((snapshot) => {
        setCurrentUser(snapshot.val())
      })
    })
  }

  function findUser(username) {
    console.log(username)
    get(ref(db, `/${username}`))
      .then((snapshot) => {
        setCurrentUser(snapshot.val())
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              data={data}
              handleIsNewUser={handleIsNewUser}
              findUser={findUser}
            />
          }
        />
        <Route
          path="/map"
          element={
            <PasswordRecovery
              data={data}
              handleIsLocation={handleIsLocation}
              handleIsCreated={handleIsCreated}
              updateLocations={updateLocations}
              isNewUser={isNewUser}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result
              isLocation={isLocation}
              isNewUser={isNewUser}
              isCreated={isCreated}
            />
          }
        />
        <Route
          path="/setLocations"
          element={<SetLocations createUser={createUser} findUser={findUser} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
