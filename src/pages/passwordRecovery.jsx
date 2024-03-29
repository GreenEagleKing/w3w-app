import React from "react"

import Map from "../components/Map"
import Header from "../components/Header"
import MultiStepForm from "../forms/MultiStepForm"

export default function PasswordRecovery({
  handleIsCorrectLocation,
  updateLocations,
  isNewUser,
  currentUser,
  isUpdating,
  isRetrieving,
}) {
  return (
    <div className="pageWrapper">
      <section className="container">
        <Header />
        <MultiStepForm
          handleIsCorrectLocation={handleIsCorrectLocation}
          updateLocations={updateLocations}
          isNewUser={isNewUser}
          currentUser={currentUser}
          isUpdating={isUpdating}
          isRetrieving={isRetrieving}
        />
        <Map />
      </section>
    </div>
  )
}
