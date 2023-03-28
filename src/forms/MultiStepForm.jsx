import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import LocationOne from "./LocationOne"
import LocationTwo from "./LocationTwo"
import { useSelectedSquare } from "../hooks/useSelectedSquare"

export default function MultiStepForm({
  handleIsLocation,
  updateLocations,
  isNewUser,
  currentUser,
  handleIsCreated,
  isUpdating,
}) {
  const { square } = useSelectedSquare()

  const [selectedLocations, setSelectedLocations] = useState({
    locationOne: "",
    locationTwo: "",
  })
  const [step, setStep] = useState(1)
  const navigate = useNavigate()

  useEffect(() => {
    if (step === 1) {
      setSelectedLocations({ ...selectedLocations, locationOne: square })
    } else {
      setSelectedLocations({ ...selectedLocations, locationTwo: square })
    }
  }, [square])

  console.log(selectedLocations)

  const handleSubmit = (e) => {
    if (isNewUser || isUpdating) {
      updateLocations(
        selectedLocations.locationOne,
        selectedLocations.locationTwo
      )
      handleIsCreated()
    } else {
      if (
        selectedLocations.locationOne ===
          currentUser.what3wordLocations.locationOne &&
        selectedLocations.locationOne ===
          currentUser.what3wordLocations.locationOne
      ) {
        handleIsLocation()
      }
    }
    navigate("/result")
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <>
      {step === 1 && <LocationOne selectedLocations={selectedLocations} />}
      {step === 2 && <LocationTwo selectedLocations={selectedLocations} />}
      {step > 1 && <button onClick={prevStep}>Back</button>}
      {step < 2 && <button onClick={nextStep}>Next</button>}
      {step === 2 && <button onClick={handleSubmit}>Submit</button>}
    </>
  )
}
