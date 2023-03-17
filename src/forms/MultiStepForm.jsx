import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationOne from './LocationOne';
import LocationTwo from './LocationTwo';

export default function MultiStepForm({ data }) {
    // keeps track of all selected locations
    const [selectedLocations, setSelectedLocations] = useState('')
    const [step, setStep] = useState(1);
    const navigate = useNavigate()

    // useEffect to control the event listener of the selected square
    useEffect(() => {
        // selects the map element
        const selected3Words = document.getElementById("w3w-map");
        // selects the input for location 1
        const location1Input = document.getElementById("location1")
        // Is the callback function which is run on each click of a new square

        const handleSelectedSquare = (e) => {
            const selectedSquare = e.detail.words
            // sets the input value as the selected 3 words and updates state
            setSelectedLocations(location1Input.value = selectedSquare)
        };

        selected3Words.addEventListener("selected_square", handleSelectedSquare);
        // unmounts the side effect once complete
        return () => {
          selected3Words.removeEventListener("selected_square", handleSelectedSquare);
        };
      }, []);

    const handleSubmit = (event) => {
      event.preventDefault()
      console.log(event)
      navigate('/result')
    }

    const nextStep = () => {
      setStep(step + 1);
    };
  
    const prevStep = () => {
      setStep(step - 1);
    };
   
  return (
    <div>
      {step === 1 && (
        <LocationOne data={data} />
      )}
      {step === 2 && (
        <LocationTwo data={data} />
      )}
      {step > 1 && (
        <button onClick={prevStep}>Back</button>
      )}
      {step < 2 && (
        <button onClick={nextStep}>Next</button>
      )}
      {step === 2 && (
        <button onClick={() => handleSubmit}>
          Submit
        </button>
      )}
    </div>
  )
}
