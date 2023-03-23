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
        <label>
          Location 1<p ref={ref} name="location1" className="location"></p>
        </label>
      </form>
    </>
  )
}

export default LocationOne
