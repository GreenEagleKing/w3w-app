import React from "react"
import ErrorMessage from "../components/ErrorMessage"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CheckUser({ findUser, handleIsNewUser }) {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await findUser(username)
      handleIsNewUser(username)
      navigate("/map")
      window.location.reload()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="user-wrapper">
        <form>
          <input
            type="text"
            value={username}
            placeholder="Your username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button
            disabled={!username}
            onClick={handleSubmit}
            className="bn30 setLocationBtn"
          >
            Find & Update User
          </button>
        </form>
      </div>
      {error && (
        <div className="create-user-error-container">
          <ErrorMessage error={error} />
        </div>
      )}
    </>
  )
}
