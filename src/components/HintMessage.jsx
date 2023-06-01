import React, { useState } from "react"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

export default function HintMessage({ currentUser }) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleContainer = () => {
    setIsExpanded(!isExpanded)
  }

  const containerStyle = {
    maxWidth: isExpanded ? "500px" : "240px",
    maxHeight: isExpanded ? "350px" : "70px",
  }

  return (
    <div id="hint-container" className="container" style={containerStyle}>
      <input
        id="collapsible"
        className="toggle"
        type="checkbox"
        checked={isExpanded}
        onChange={toggleContainer}
      />
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
          <p className="p-centered">
            Current user data is displayed here to help make testing the app
            functionality easier. Copy locations into the map search bar.
          </p>
          {currentUser && (
            <div className="hint-data">
              <div className="hint-type">
                <p>Location 1</p>
                <div
                  className="hint-copy"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      currentUser.what3wordLocations.locationOne
                    )
                  }}
                >
                  <p>{currentUser.what3wordLocations.locationOne}</p>
                  <ContentCopyIcon className="copy-btn" />
                </div>
              </div>
              <div className="hint-type">
                <p>Location 2</p>
                <div
                  className="hint-copy"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      currentUser.what3wordLocations.locationTwo
                    )
                  }}
                >
                  <p>{currentUser.what3wordLocations.locationTwo}</p>
                  <ContentCopyIcon className="copy-btn" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
