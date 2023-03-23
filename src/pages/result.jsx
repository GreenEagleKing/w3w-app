import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

export default function Result({ data, isLocation }) {
  return (
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
    </>
  )
}
