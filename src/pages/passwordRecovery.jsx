import React from "react"

import Map from "../components/Map"
import Header from "../components/Header"
import MultiStepForm from "../forms/MultiStepForm"

export default function PasswordRecovery({
  handleIsLocation,
  updateLocations,
  isNewUser,
  currentUser,
  handleIsCreated,
  isUpdating,
}) {
  return (
    <>
      <Header />
      <MultiStepForm
        handleIsLocation={handleIsLocation}
        updateLocations={updateLocations}
        isNewUser={isNewUser}
        currentUser={currentUser}
        handleIsCreated={handleIsCreated}
        isUpdating={isUpdating}
      />
      <Map />
    </>
  )
}
