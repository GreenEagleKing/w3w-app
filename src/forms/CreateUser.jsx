import React, { useEffect } from "react"
import ErrorMessage from "../components/ErrorMessage"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateUser({
  createUser,
  findUser,
  handleIsNewUser,
  isNewUser,
}) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    let isNewUserArg = true

    e.preventDefault()
    let checkType = "newUser"

    try {
      handleIsNewUser()
      await findUser(username, checkType)
      await createUser(username)
      navigate("/map")
      window.location.reload()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div className="user-wrapper">
        <h3 className="paragraph-center">New User</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            placeholder="New Username"
            onChange={(e) => setUsername(e.target.value)}
          ></input>
          <button
            disabled={!username}
            type="submit"
            className="bn30 setLocationBtn"
          >
            Create New User
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
