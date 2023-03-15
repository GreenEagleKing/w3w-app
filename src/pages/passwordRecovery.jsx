import React from 'react'

import Map from '../components/Map'
import Header from '../components/Header'
import LocationForm from '../forms/LocationForm'

export default function PasswordRecovery({ data }) {

  return (
   <div>
        <Header />
        <LocationForm data={data}/>
        <Map />
   </div>
  )
}
