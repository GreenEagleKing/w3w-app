import React from "react"
import { useRef, useEffect } from "react"

function LocationOne({ selectedLocations }) {
  const ref = useRef(null)

  useEffect(() => {
    const input = ref.current
    if (input.value === "") {
      input.value = selectedLocations.locationOne
    }
  }, [])

  return (
    <div>
      <form>
        <label>
          Location 1
          <input
            ref={ref}
            type="text"
            name="location1"
            className="location"
            disabled
          ></input>
        </label>
      </form>
    </div>
  )
}

export default LocationOne
