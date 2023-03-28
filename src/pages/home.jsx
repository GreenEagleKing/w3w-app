import React from "react"
import Header from "../components/Header"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Home({ handleIsNewUser, findUser, handleUpdateUser }) {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  const handleClick = (e) => {
    handleIsNewUser()
  }

  const handleSubmit = (e) => {
    findUser(username)
    handleIsNewUser(username)
    handleUpdateUser(username)
    navigate("/map")
  }

  return (
    <>
      <Header />
      <div>
        <p>
          Welcome to password recovery using what3words. Please confirm username
          is correct by clicking the button below or set locations.
        </p>
        <Link to="/setLocations">
          <button onClick={handleClick}>{`Set Locations`}</button>
        </Link>
        <div>
          <form>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
            />
            <button
              onClick={handleSubmit}
            >{`Retrieve Password using Map`}</button>
          </form>
        </div>
      </div>
    </>
  )
}
