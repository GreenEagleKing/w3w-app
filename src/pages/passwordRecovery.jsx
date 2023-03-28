import React from "react"

import Map from "../components/Map"
import Header from "../components/Header"
import MultiStepForm from "../forms/MultiStepForm"

export default function PasswordRecovery({
  data,
  handleIsLocation,
  updateLocations,
  isNewUser,
  currentUser,
  handleIsCreated,
}) {
  return (
    <>
      <Header />
      <MultiStepForm
        data={data}
        handleIsLocation={handleIsLocation}
        updateLocations={updateLocations}
        isNewUser={isNewUser}
        currentUser={currentUser}
        handleIsCreated={handleIsCreated}
      />
      <Map />
    </>
  )
}
