import { useEffect, useState } from "react"

export function useSelectedSquare() {
  const [square, setSquare] = useState("")

  useEffect(() => {
    const selected3Words = document.getElementById("w3w-map")
    const locationInput = document.getElementsByClassName("location")

    const handleSelectedSquare = (e) => {
      locationInput[0].value = e.detail.words
      setSquare(e.detail.words)
    }

    selected3Words.addEventListener("selected_square", handleSelectedSquare)
    return () => {
      selected3Words.removeEventListener(
        "selected_square",
        handleSelectedSquare
      )
    }
  }, [])

  return {
    square,
  }
}
