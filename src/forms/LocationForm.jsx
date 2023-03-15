import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LocationForm({ data }) {
    // keeps track of all selected locations
    const [selectedLocations, setSelectedLocations] = useState('')
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
      const dataLocation1 = data.user1.what3words.location1
      if(selectedLocations === dataLocation1) {
        console.log("Successful match")
      }
      // navigate('/result')
    }
   
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Location 1
                <input type='text' name='location1' id='location1'></input>
            </label>
            <input type="submit" value="Submit" />
        </form>
    </div>
  )
}
