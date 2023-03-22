import React from "react"
import { useRef, useEffect } from "react"

function LocationTwo({ selectedLocations }) {
  const ref = useRef(null)

  useEffect(() => {
    const input = ref.current
    if (input.value === "") {
      input.value = selectedLocations.locationTwo
    }
  }, [])

  return (
    <div>
      <form>
        <label>
          Location 2
          <input
            ref={ref}
            type="text"
            name="location2"
            className="location"
            disabled
          ></input>
        </label>
      </form>
    </div>
  )
}

export default LocationTwo
