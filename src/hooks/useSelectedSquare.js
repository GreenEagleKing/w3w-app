import React from "react";
import { useEffect } from "react";


export function useSelectedSquare() {
let selectedSquare = ''

useEffect(() => {
  const selected3Words = document.getElementById("w3w-map");
  const locationInput = document.getElementsByClassName("location")

  const handleSelectedSquare = (e) => {
      selectedSquare = e.detail.words
      locationInput[0].value = selectedSquare
  };

  selected3Words.addEventListener("selected_square", handleSelectedSquare);
  return () => {
    selected3Words.removeEventListener("selected_square", handleSelectedSquare);
  };
}, [])

return selectedSquare

}


 