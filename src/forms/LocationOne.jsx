import React from "react"

function LocationOne() {
  return (
    <div>
      <form>
        <label>
          Location 1
          <input
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
