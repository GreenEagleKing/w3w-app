import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

export default function Result({
  isLocation,
  isNewUser,
  isCreated,
  isUpdating,
}) {
  return (
    <div className="pageWrapper">
      <Header />
      {isNewUser && isCreated ? (
        <div>
          <p>Locations successfully created for xxxx user.</p>
        </div>
      ) : isUpdating ? (
        <div>
          <p>Locations successfully updated for xxxx user.</p>
        </div>
      ) : isNewUser && !isCreated ? (
        <div>
          <p>Locations unsuccessfully created. Please try again.</p>
          <Link to="/setLocations">
            <button>Go Back</button>
          </Link>
        </div>
      ) : isLocation ? (
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
    </div>
  )
}
