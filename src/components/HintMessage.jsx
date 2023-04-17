import React from "react"

export default function HintMessage({ currentUser }) {
  return (
    <div className="hint-container container">
      <h4>MVP Tester/Helper</h4>
      <p>
        User data is displayed here to make testing the functionality easier.
      </p>
      {currentUser && (
        <div className="hint-data">
          <p>
            <b>Current User: </b>
            {currentUser.username}
          </p>
          <p>
            <b>Location 1: </b>
            {currentUser.what3wordLocations.locationOne}
          </p>
          <p>
            <b>Location 2: </b>
            {currentUser.what3wordLocations.locationTwo}
          </p>
        </div>
      )}
    </div>
  )
}