import React from "react"

import Map from "../components/Map"
import Header from "../components/Header"
import MultiStepForm from "../forms/MultiStepForm"

export default function PasswordRecovery({ data, handleIsLocation }) {
  return (
    <div>
      <Header />
      <MultiStepForm data={data} handleIsLocation={handleIsLocation} />
      <Map />
    </div>
  )
}
