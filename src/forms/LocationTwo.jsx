import React from "react"
import { useRef, useEffect } from "react"

function LocationTwo({ selectedLocations }) {
  const ref = useRef(null)

  useEffect(() => {
    const currentLocationRef = ref.current
    if (currentLocationRef.innerText === "") {
      currentLocationRef.innerText = selectedLocations.locationTwo
    }
  }, [])

  return (
    <div>
      <form>
        <label>
          Location 2<p ref={ref} name="location2" className="location"></p>
        </label>
      </form>
    </div>
  )
}

export default LocationTwo
