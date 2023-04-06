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
      <section className="container">
        <Header />
        <div className="result-container">
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
              <div className="button-wrapper">
                <Link to="/setLocations">
                  <button className="bn30">Go Back</button>
                </Link>
              </div>
            </div>
          ) : isLocation ? (
            <div>
              <p>Locations successfully matched. Please retrieve password.</p>
              <Link to="/">
                <button className="bn30">Retrieve Password</button>
              </Link>
            </div>
          ) : (
            <div>
              <p>Locations did not match. Please try again.</p>
              <div className="button-wrapper">
                <Link to="/">
                  <button className="bn30">Try Again</button>
                </Link>
              </div>
            </div>
          )}
          <span>
            <Link to="/">
              <button className="bn30">Home</button>
            </Link>
          </span>
        </div>
      </section>
    </div>
  )
}
