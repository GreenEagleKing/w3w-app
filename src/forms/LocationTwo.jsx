import React from "react"
import { useRef, useEffect } from "react"

function LocationTwo({ selectedLocations }) {
  const ref = useRef(null)

  useEffect(() => {
    const currentLocationRef = ref.current
    if (currentLocationRef.innerText === "") {
      currentLocationRef.innerText = selectedLocations.locationTwo
    }
  })

  return (
    <div>
      <form>
        <div className="location-feedback">
          <h3>Location 2</h3>
          <div className="selected-location-container">
            <p id="w3w-lines">///</p>
            <p ref={ref} name="location2" className="location"></p>
          </div>
        </div>
      </form>
    </div>
  )
}

export default LocationTwo
