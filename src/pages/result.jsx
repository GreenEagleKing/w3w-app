import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../components/Header'

export default function Result({ data }) {
  return (
    <div>
        <Header />

        

        <Link to="/">
            <button>Try again</button>
        </Link>
        
        {/* if form completes successfully then show button to change password
            if form is unsuccessful then show button to start again  */}
    </div>
  )
}
