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
          <h3> Welcome to Password Recovery using What3Words. </h3>
          <Lottie id="mapMarker" animationData={mapMarker} loop={true} />
          <div className="location-input-container">
            <p className="paragraph-center">
              If you are new here and have not set your locations before or want
              to reset your locations please select 'Choose Locations'.
            </p>
            <Link to="/setLocations">
              <button
                onClick={handleClick}
                className="bn30"
              >{`Choose Locations`}</button>
            </Link>
          </div>
          <div className="location-input-container">
            <p className="paragraph-center">
              If you have set your locations before please input your username
              and retrieve locations.
            </p>
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
              >{`Retrieve Password`}</button>
            </form>
          </div>
          {error && <ErrorMessage error={error} />}
        </div>
      </section>
    </div>
  )
}
