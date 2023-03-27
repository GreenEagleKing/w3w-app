import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

export default function Result({ data, isLocation, isNewUser }) {
  return (
    <>
      <Header />
      {isNewUser ? (
        <div>
          <p>Locations successfully create for xxxx user.</p>
        </div>
      ) : (
        <div>
          <p>Locations unsuccessfully created. Please try again.</p>
          <Link to="/setLocations">
            <button>Go Back</button>
          </Link>
        </div>
      )}
      <Link to="/">
        <button>Home</button>
      </Link>
    </>
  )
}

{
  /* User update before database integration
  <>
      <Header />
      {isLocation ? (
        <div>
          <p>Successful location match. Please continue to reset password</p>
          <Link to="/">
            <button>Reset Password</button>
          </Link>
        </div>
      ) : (
        <div>
          <p>
            Locations did not match. Please try again or check for correct
            username.
          </p>
          <Link to="/map">
            <button>Go Back</button>
          </Link>
        </div>
      )}
      <Link to="/">
        <button>Start Again</button>
      </Link>
    </> */
}
