import React from "react"
import ErrorMessage from "../components/ErrorMessage"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CheckUser({ findUser, handleUpdateUser }) {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()
  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    let checkType = "retrieveUpdate"
    e.preventDefault()
    try {
      await findUser(username, checkType)
      handleUpdateUser()
      navigate("/map")
      window.location.reload()
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    <>
      <div id="update-user-wrapper" className="user-wrapper">
        <h3 className="paragraph-center">Update User Locations</h3>
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
        <div className="error-wrapper">
          <ErrorMessage error={error} />
        </div>
      )}
    </>
  )
}
