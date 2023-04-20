import React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

export default function Result({
  isLocation,
  isNewUser,
  isCreated,
  isUpdating,
  currentUser,
}) {
  const [notResultPage, setNotResultPage] = useState(true)

  return (
    <div className="pageWrapper">
      <section className="container">
        <Header notResultPage={notResultPage} />
        <div className="result-container">
          {isNewUser && isCreated ? (
            <div className="result">
              <p>
                Locations successfully created for <b>{currentUser.username}</b>
              </p>
              <div className="result-locations">
                <p>Location 1: </p>
                <h4>{currentUser.what3wordLocations.locationOne}</h4>
                <p>Location 2: </p>
                <h4>{currentUser.what3wordLocations.locationTwo}</h4>
              </div>
            </div>
          ) : isUpdating ? (
            <div>
              <h4>
                Locations successfully updated for <b>{currentUser.username}</b>
              </h4>
              <div className="result-locations">
                <p>Updated Location 1: </p>
                <h4>{currentUser.what3wordLocations.locationOne}</h4>
                <p>Updated Location 2: </p>
                <h4>{currentUser.what3wordLocations.locationTwo}</h4>
              </div>
            </div>
          ) : isNewUser && !isCreated ? (
            <div>
              <h4>Locations unsuccessfully created. Please try again.</h4>
              <div className="button-wrapper">
                <Link to="/setLocations">
                  <button className="bn30">Go Back</button>
                </Link>
              </div>
            </div>
          ) : isLocation ? (
            <div className="result">
              <h4>
                Locations successfully matched for <b>{currentUser.username}</b>
              </h4>
              <p>Please retrieve password.</p>
              <Link to="/">
                <button className="bn30 result-btn">Retrieve Password</button>
              </Link>
            </div>
          ) : (
            <div>
              <h4>Locations did not match. Please try again.</h4>
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
