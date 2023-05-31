import React from "react"
import { Link } from "react-router-dom"

import Header from "../components/Header"

export default function Result({
  isCorrectLocation,
  isNewUser,
  isCreated,
  isUpdating,
  currentUser,
  isRetrieving,
}) {
  return (
    <div className="pageWrapper">
      <section className="container">
        <Header />
        <div className="result-container">
          {isNewUser && isCreated ? (
            <>
              <div className="result">
                <p className="p-centered">
                  Locations successfully created for{" "}
                  <b>{currentUser.username}</b>
                </p>
                <div className="result-locations-wrapper">
                  <div className="result-locations">
                    <p className="result-p">Created Location 1 : </p>
                    <h2>/// {currentUser.what3wordLocations.locationOne}</h2>
                  </div>
                  <div className="result-locations">
                    <p className="result-p">Created Location 2 : </p>
                    <h2>/// {currentUser.what3wordLocations.locationTwo}</h2>
                  </div>
                </div>
              </div>
              <Link to="/">
                <button className="bn30">Home</button>
              </Link>
            </>
          ) : isUpdating ? (
            <>
              <div>
                <p className="p-centered">
                  Locations successfully updated for{" "}
                  <b>{currentUser.username}</b>
                </p>
                <div className="result-locations-wrapper">
                  <div className="result-locations">
                    <p className="result-p">Updated Location 1: </p>
                    <h2>/// {currentUser.what3wordLocations.locationOne}</h2>
                  </div>
                  <div className="result-locations">
                    <p className="result-p">Updated Location 2: </p>
                    <h2>/// {currentUser.what3wordLocations.locationTwo}</h2>
                  </div>
                </div>
              </div>
              <Link to="/">
                <button className="bn30">Home</button>
              </Link>
            </>
          ) : isNewUser && !isCreated ? (
            <div>
              <p className="p-centered no-match">
                Locations unsuccessfully created for user {currentUser.username}
              </p>
              <div className="result-btn-wrapper">
                <Link to="/">
                  <button className="bn30">Home</button>
                </Link>
                <Link to="/setLocations">
                  <button className="bn30">Try Again</button>
                </Link>
              </div>
            </div>
          ) : isRetrieving && isCorrectLocation ? (
            <>
              <div className="result">
                <p className="p-centered">
                  Locations successfully matched for{" "}
                  <b>{currentUser.username}</b>
                </p>
                <div className="result-locations">
                  <p className="result-p">Your password is : </p>
                  <h2>"ExamplePassword"</h2>
                </div>
              </div>
              <Link to="/">
                <button className="bn30">Home</button>
              </Link>
            </>
          ) : (
            <>
              <div>
                <p className="p-centered no-match">
                  Locations did not match for user <b>{currentUser.username}</b>
                </p>
              </div>
              <div className="result-btn-wrapper">
                <Link to="/">
                  <button className="bn30">Home</button>
                </Link>
                <Link to="/setLocations">
                  <button className="bn30">Try Again</button>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  )
}
