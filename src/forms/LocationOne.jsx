import React from 'react'

function LocationOne({ }) {

    // const handleChange = event => {
    //     updateLocation({ ...data, name: event.target.value });
    //   };

  return (
    <div>
        <form>
            <label>Location 1
                <input type='text' name='location1' id='location1'></input>
            </label>
        </form>
    </div>
  )
}

export default LocationOne