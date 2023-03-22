import React from "react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import LocationOne from "./LocationOne"
import LocationTwo from "./LocationTwo"
import { useSelectedSquare } from "../hooks/useSelectedSquare"

export default function MultiStepForm({ data, handleIsLocation }) {
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

  const handleSubmit = (event) => {
    event.preventDefault()
    if (
      selectedLocations.locationOne === data.user1.what3words.location1 &&
      selectedLocations.locationTwo === data.user1.what3words.location2
    ) {
      handleIsLocation()
      console.log("Success")
    }
    console.log(selectedLocations)
    console.log(data)
    navigate("/result")
  }

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  return (
    <div>
      {step === 1 && (
        <LocationOne data={data} selectedLocations={selectedLocations} />
      )}
      {step === 2 && (
        <LocationTwo data={data} selectedLocations={selectedLocations} />
      )}
      {step > 1 && <button onClick={prevStep}>Back</button>}
      {step < 2 && <button onClick={nextStep}>Next</button>}
      {step === 2 && <button onClick={handleSubmit}>Submit</button>}
    </div>
  )
}
