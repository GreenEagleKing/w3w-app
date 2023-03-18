import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LocationOne from './LocationOne';
import LocationTwo from './LocationTwo';
import { useSelectedSquare } from '../hooks/useSelectedSquare';


export default function MultiStepForm({ data }) {
    // keeps track of all selected locations
    // const [selectedLocations, setSelectedLocations] = useState('')
    const [step, setStep] = useState(1);
    const navigate = useNavigate()

    useSelectedSquare()

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
        <LocationOne data={data}/>
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
