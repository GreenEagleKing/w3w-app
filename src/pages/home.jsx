import React from "react"
import Header from "../components/Header"
import { Link } from "react-router-dom"

export default function Home({ data }) {
  return (
    <>
      <Header />
      <div>
        <p>
          Welcome to password recovery using what3words. Please confirm username
          is correct by clicking the button below or set locations.
        </p>
        <Link to="/map">
          <button>{`Confirm username is correct`}</button>
        </Link>
        <Link to="/setLocations">
          <button>{`Set Locations`}</button>
        </Link>
      </div>
    </>
  )
}
