import PasswordRecovery from "./pages/passwordRecovery"
import Home from "./pages/home"
import Result from "./pages/result"
import SetLocations from "./pages/setLocations"
import VideoBackground from "./components/VideoBackground"
import HintMessage from "./components/HintMessage"
import { DbService } from "./services/DbService"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const {
    createUser,
    findUser,
    updateLocations,
    currentUser,
    checkUser,
    isCreated,
    isLocation,
    isNewUser,
    isUpdating,
    handleIsNewUser,
    handleUpdateUser,
    handleIsCreated,
    handleIsLocation,
    resetState,
  } = DbService()

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
              resetState={resetState}
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
      <HintMessage currentUser={currentUser} />
      <VideoBackground id="videoBackground" />
    </BrowserRouter>
  )
}

export default App
