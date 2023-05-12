import React from "react"

export default function HintMessage({ currentUser }) {
  return (
    <div className="hint-container container">
      <input id="collapsible" class="toggle" type="checkbox" />
      <label for="collapsible" class="lbl-toggle">
        MVP Helper
      </label>
      <div class="collapsible-content">
        <div class="content-inner">
          <p>
            User data is displayed here to make testing the functionality
            easier.
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
      </div>
    </div>
  )
}
