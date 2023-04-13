import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

export default function Result({
  isLocation,
  isNewUser,
  isCreated,
  isUpdating,
  currentUser,
}) {
  return (
    <div className="pageWrapper">
      <section className="container">
        <Header />
        <div className="result-container">
          {isNewUser && isCreated ? (
            <div>
              <p>
                Locations successfully created for <b>{currentUser.username}</b>
                .
              </p>
              <div className="result-locations">
                <h3>Location 1: </h3>
                <p>{currentUser.what3wordLocations.locationOne}</p>
                <h3>Location 2: </h3>
                <p>{currentUser.what3wordLocations.locationTwo}</p>
              </div>
            </div>
          ) : isUpdating ? (
            <div>
              <p>
                Locations successfully updated for <b>{currentUser.username}</b>
                .
              </p>
              <div className="result-locations">
                <h3>Updated Location 1: </h3>
                <p>{currentUser.what3wordLocations.locationOne}</p>
                <h3>Updated Location 2: </h3>
                <p>{currentUser.what3wordLocations.locationTwo}</p>
              </div>
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
              <p>
                Locations successfully matched for <b>{currentUser.username}</b>
                . Please retrieve password.
              </p>
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
