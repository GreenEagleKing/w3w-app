import React from "react"
import Navigation from "./Navigation"

export default function Header({ notResultPage }) {
  return (
    <>
      <div className="nav-section">
        <Navigation notResultPage={notResultPage} />
      </div>

      <div className="header">
        <h1>Password Recovery Map</h1>
      </div>
    </>
  )
}
