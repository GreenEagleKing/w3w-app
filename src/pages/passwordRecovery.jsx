import React from 'react'

import Map from '../components/Map'
import Header from '../components/Header'
import LocationForm from '../forms/LocationForm'
import MultiStepForm from '../forms/MultiStepForm'

export default function PasswordRecovery({ data }) {

  return (
   <div>
        <Header />
        <MultiStepForm data={data}/>
        <Map />
   </div>
  )
}
