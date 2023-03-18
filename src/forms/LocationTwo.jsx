import React from 'react'

function LocationTwo({ }) {

    // const handleChange = event => {
    //     updateLocation({ ...data, name: event.target.value });
    //   };

  return (
    <div>
        <form>
            <label>Location 2
                <input type='text' name='location2' className='location'></input>
            </label>
        </form>
    </div>
  )
}

export default LocationTwo