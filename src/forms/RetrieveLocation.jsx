import React from "react"
import ErrorMessage from "../components/ErrorMessage"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function RetrieveLocation({ findUser, handleIsRetrieving }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await findUser(username)
      handleIsRetrieving()
      navigate("/map")
      window.location.reload()
    } catch (error) {
      setError(error.message)
    }
    return
  }

  return (
    <>
      <div className="user-wrapper">
        <h3 className="paragraph-center">Retrieve Location</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Your Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button
            disabled={!username}
            type="submit"
            className="bn30 setLocationBtn"
          >
            Retrieve Password
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
