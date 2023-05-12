import React, { useEffect } from "react"
import Header from "../components/Header"
import ErrorMessage from "../components/ErrorMessage"
import Lottie from "lottie-react"
import mapMarker from "../assets/mapMarker.json"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function Home({
  handleIsNewUser,
  findUser,
  handleUpdateUser,
  resetState,
}) {
  const [username, setUsername] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    resetState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleClick = (e) => {
    handleIsNewUser()
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await findUser(username)
      handleIsNewUser(username)
      handleUpdateUser(username)
      navigate("/map")
      window.location.reload()
    } catch (error) {
      setError(error.message)
    }
    return
  }

  return (
    <div className="pageWrapper">
      <section className="container">
        <Header />
        <div className="welcome-container">
          <p className="p-centered">
            Welcome to Password Recovery using What3Words, an alternative to
            security questions. Recover a forgotten password using What3Words
            locations globally to validate and retrieve passwords.
          </p>
          <Lottie id="mapMarker" animationData={mapMarker} loop={true} />
          <div className="location-input-container">
            <h3>New Users and Updating Existing Locations</h3>
            <Link to="/setLocations">
              <button
                onClick={handleClick}
                className="bn30"
              >{`Choose Locations`}</button>
            </Link>
          </div>
          <div className="location-input-container">
            <h3 className="paragraph-center">Existing User</h3>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter username"
              />
              <button
                type="submit"
                className="bn30"
                disabled={!username}
              >{`Retrieve Password`}</button>
            </form>
          </div>
          {error && <ErrorMessage error={error} />}
        </div>
      </section>
    </div>
  )
}
