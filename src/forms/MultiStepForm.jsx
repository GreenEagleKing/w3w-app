import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

import LocationOne from "./LocationOne"
import LocationTwo from "./LocationTwo"
import { useSelectedSquare } from "../hooks/useSelectedSquare"
import ErrorMessage from "../components/ErrorMessage"

export default function MultiStepForm({
  handleIsCorrectLocation,
  updateLocations,
  isNewUser,
  currentUser,
  isUpdating,
  isRetrieving,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [square])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (
        selectedLocations.locationOne === "" ||
        selectedLocations.locationTwo === ""
      ) {
        throw new Error(
          "Selected location is blank, please ensure a location is selected for both."
        )
      } else {
        if (isNewUser || isUpdating) {
          await updateLocations(
            selectedLocations.locationOne,
            selectedLocations.locationTwo
          )
        } else if (isRetrieving) {
          if (
            selectedLocations.locationOne ===
              currentUser.what3wordLocations.locationOne &&
            selectedLocations.locationOne ===
              currentUser.what3wordLocations.locationOne
          ) {
            handleIsCorrectLocation()
          }
        }
        navigate("/result")
      }
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
      <p className="p-centered">Select locations on map or input location.</p>
      <div
        className={step === 2 ? "location-form" : "location-form-transition"}
      >
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
          <button onClick={handleSubmit} className="bn30 submit">
            Submit
          </button>
        )}
      </div>
      <div>{error && <ErrorMessage error={error} />}</div>
    </>
  )
}
