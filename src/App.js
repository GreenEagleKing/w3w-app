import PasswordRecovery from "./pages/passwordRecovery"
import Home from "./pages/home"
import Result from "./pages/result"
import SetLocations from "./pages/setLocations"
import VideoBackground from "./components/VideoBackground"
import ThreeBackground from "./components/ThreeBackground"
import HintMessage from "./components/HintMessage"
import { DbService } from "./services/DbService"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  const {
    createUser,
    findUser,
    updateLocations,
    currentUser,
    isCreated,
    isCorrectLocation,
    isNewUser,
    isUpdating,
    isRetrieving,
    handleIsNewUser,
    handleUpdateUser,
    handleIsCorrectLocation,
    handleIsRetrieving,
    resetState,
  } = DbService()

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home resetState={resetState} />} />
        <Route
          path="/setLocations"
          element={
            <SetLocations
              createUser={createUser}
              findUser={findUser}
              isNewUser={isNewUser}
              handleIsNewUser={handleIsNewUser}
              handleUpdateUser={handleUpdateUser}
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
              isCreated={isCreated}
              isUpdating={isUpdating}
              currentUser={currentUser}
              isRetrieving={isRetrieving}
            />
          }
        />
      </Routes>
      {currentUser && <HintMessage currentUser={currentUser} />}
      {/* <VideoBackground id="videoBackground" /> */}
      <ThreeBackground />
    </BrowserRouter>
  )
}

export default App
