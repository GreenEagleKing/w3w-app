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
    isCreating,
    isCorrectLocation,
    isNewUser,
    isUpdating,
    isRetrieving,
    handleIsNewUser,
    handleUpdateUser,
    handleIsCreating,
    handleIsCorrectLocation,
    handleIsRetrieving,
    resetState,
  } = DbService()

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          path="/setLocations"
          element={
            <SetLocations
              createUser={createUser}
              findUser={findUser}
              checkUser={checkUser}
              handleIsNewUser={handleIsNewUser}
              handleUpdateUser={handleUpdateUser}
              handleIsCreating={handleIsCreating}
              handleIsRetrieving={handleIsRetrieving}
              resetState={resetState}
            />
          }
        />
        <Route
          path="/map"
          element={
            <PasswordRecovery
              handleIsCorrectLocation={handleIsCorrectLocation}
              handleIsCreating={handleIsCreating}
              updateLocations={updateLocations}
              isNewUser={isNewUser}
              currentUser={currentUser}
              isUpdating={isUpdating}
              isRetrieving={isRetrieving}
            />
          }
        />
        <Route
          path="/result"
          element={
            <Result
              isCorrectLocation={isCorrectLocation}
              isNewUser={isNewUser}
              isCreating={isCreating}
              isUpdating={isUpdating}
              currentUser={currentUser}
              isRetrieving={isRetrieving}
            />
          }
        />
      </Routes>
      {currentUser && <HintMessage currentUser={currentUser} />}
      <VideoBackground id="videoBackground" />
    </BrowserRouter>
  )
}

export default App
