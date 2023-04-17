import React from "react"
import { useRef, useEffect } from "react"

function LocationOne({ selectedLocations }) {
  const ref = useRef(null)

  useEffect(() => {
    const currentLocationRef = ref.current
    if (currentLocationRef.innerText === "") {
      currentLocationRef.innerText = selectedLocations.locationOne
    }
  }, [])

  return (
    <>
      <form>
        <div className="location-feedback">
          <h3>Location 1</h3>
          <p ref={ref} name="location1" className="location"></p>
        </div>
      </form>
    </>
  )
}

export default LocationOne
