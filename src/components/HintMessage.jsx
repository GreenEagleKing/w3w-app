import React from "react"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

export default function HintMessage({ currentUser }) {
  return (
    <div className="hint-container container">
      <input id="collapsible" className="toggle" type="checkbox" />
      <label htmlFor="collapsible" className="lbl-toggle">
        MVP Helper
      </label>
      <div className="collapsible-content">
        <div className="content-inner">
          <div id="hint-username">
            <p>Username</p>
            <p>
              <b>{currentUser.username}</b>
            </p>
          </div>
          <p>
            Current user data is displayed here to help testing the app
            functionality easier.
          </p>
          {currentUser && (
            <div className="hint-data">
              <div className="hint-type">
                <p>Location 1</p>
                <div className="hint-copy">
                  <p>{currentUser.what3wordLocations.locationOne}</p>
                  <ContentCopyIcon
                    className="copy-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        currentUser.what3wordLocations.locationOne
                      )
                    }}
                  />
                </div>
              </div>
              <div className="hint-type">
                <p>Location 2</p>
                <div className="hint-copy">
                  <p>{currentUser.what3wordLocations.locationTwo}</p>
                  <ContentCopyIcon
                    className="copy-btn"
                    onClick={() => {
                      navigator.clipboard.writeText(
                        currentUser.what3wordLocations.locationTwo
                      )
                    }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
