import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import LocationOne from "./LocationOne"
import LocationTwo from "./LocationTwo"
import { useSelectedSquare } from "../hooks/useSelectedSquare"
import ErrorMessage from "../components/ErrorMessage"

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
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (step === 1) {
      setSelectedLocations({ ...selectedLocations, locationOne: square })
    } else {
      setSelectedLocations({ ...selectedLocations, locationTwo: square })
    }
  }, [square])

  console.log(selectedLocations)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (isNewUser || isUpdating) {
        await updateLocations(
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
    } catch (error) {
      setError(error.message)
    }
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <>
      <div className="location-form">
        {step === 1 && <LocationOne selectedLocations={selectedLocations} />}
        {step === 2 && <LocationTwo selectedLocations={selectedLocations} />}
        {step > 1 && (
          <button onClick={prevStep} className="bn30">
            Back
          </button>
        )}
        {step < 2 && (
          <button onClick={nextStep} className="bn30">
            Next
          </button>
        )}
        {step === 2 && (
          <button onClick={handleSubmit} className="bn30">
            Submit
          </button>
        )}
      </div>
      <div>{error && <ErrorMessage error={error} />}</div>
    </>
  )
}
