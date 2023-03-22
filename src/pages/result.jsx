import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

export default function Result({ data }) {
  return (
    <div>
      <Header />
      <Link to="/">
        <button>Start Again</button>
      </Link>
      <Link to="/map">
        <button>Try Again</button>
      </Link>
      <Link to="/">
        <button>Reset Password</button>
      </Link>
    </div>
  )
}

// if the user locations match then show successful message and option to reset password
// if unsuccessful show button to start again or go back
