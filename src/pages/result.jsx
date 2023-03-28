import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

export default function Result({ isLocation, isNewUser, isCreated }) {
  return (
    <>
      <Header />
      {isNewUser && isCreated ? (
        <div>
          <p>Locations successfully create for xxxx user.</p>
        </div>
      ) : isNewUser && !isCreated ? (
        <div>
          <p>Locations unsuccessfully created. Please try again.</p>
          <Link to="/setLocations">
            <button>Go Back</button>
          </Link>
        </div>
      ) : !isNewUser && isLocation ? (
        <div>
          <p>Locations successfully matched. Please retrieve password.</p>
          <Link to="/">
            <button>Retrieve Password</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>Locations did not match. Please try again.</p>
          <Link to="/">
            <button>Try Again</button>
          </Link>
        </div>
      )}
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  )
}
