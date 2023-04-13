import PasswordRecovery from "./pages/passwordRecovery"
import Home from "./pages/home"
import Result from "./pages/result"
import SetLocations from "./pages/setLocations"
import fetchData from "./hooks/api"
import VideoBackground from "./components/VideoBackground"

import { db } from "./firebase"
import { uid } from "uid"
import { set, ref, update, get } from "firebase/database"

import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"

function App() {
  const [isLocation, setIsLocation] = useState(false)
  const [currentUser, setCurrentUser] = useState(null)
  const [isNewUser, setIsNewUser] = useState(false)
  const [isCreated, setIsCreated] = useState(false)
  const [isUpdating, setIsUpdating] = useState(false)

  // useEffect(() => {
  //   const getData = async () => {
  //     const fetchedData = await fetchData()
  //     setData(fetchedData)
  //     console.log(fetchedData)
  //   }
  //   getData()
  // }, [])

  function handleIsLocation() {
    setIsLocation(!isLocation)
  }

  function handleIsNewUser(makeFalse) {
    makeFalse ? setIsNewUser(false) : setIsNewUser(true)
  }

  function handleUpdateUser(makeFalse) {
    makeFalse ? setIsUpdating(false) : setIsUpdating(true)
  }

  function handleIsCreated() {
    setIsCreated(!isCreated)
  }

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
  }

  async function checkUser(username) {
    console.log(username)
    try {
      const snapshot = await get(ref(db, `/${username}`))
      if (snapshot.val() !== null) {
        throw new Error("Username already exists")
      }
    } catch (error) {
      throw error
    }
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
        console.log(snapshot.val())
      })
    })
  }

  async function findUser(username) {
    console.log(username)
    try {
      const snapshot = await get(ref(db, `/${username}`))
      if (snapshot.val() === null) {
        throw new Error("User not found")
      }
      setCurrentUser(snapshot.val())
      handleUpdateUser()
    } catch (error) {
      throw error
    }
    console.log(currentUser)
  }

  console.log(isNewUser, isUpdating)

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <Home
              handleIsNewUser={handleIsNewUser}
              findUser={findUser}
              handleUpdateUser={handleUpdateUser}
            />
          }
        />
        <Route
          path="/map"
          element={
            <PasswordRecovery
              handleIsLocation={handleIsLocation}
              handleIsCreated={handleIsCreated}
              updateLocations={updateLocations}
              isNewUser={isNewUser}
              currentUser={currentUser}
              isUpdating={isUpdating}
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
              isUpdating={isUpdating}
              currentUser={currentUser}
            />
          }
        />
        <Route
          path="/setLocations"
          element={
            <SetLocations
              createUser={createUser}
              findUser={findUser}
              checkUser={checkUser}
              handleIsNewUser={handleIsNewUser}
            />
          }
        />
      </Routes>
      <VideoBackground id="videoBackground" />
    </BrowserRouter>
  )
}

export default App
