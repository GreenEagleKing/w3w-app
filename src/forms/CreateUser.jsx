import React from "react"
import ErrorMessage from "../components/ErrorMessage"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import CheckUser from "./CheckUser"

export default function CreateUser({ createUser, checkUser }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [error, setError] = useState(null)

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await checkUser(username)
      createUser(username)
      navigate("/map")
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="user-wrapper">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="Input New Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button type="submit" className="bn30">
            Create New User
          </button>
        </form>
      </div>
      <div className="create-user-error-container">
        {error && <ErrorMessage error={error} />}
      </div>
    </>
  )
}
