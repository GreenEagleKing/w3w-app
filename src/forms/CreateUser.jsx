import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CreateUser({ createUser }) {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")

  function handleSubmit(e) {
    // e.preventDefault()
    createUser(username)
    navigate("/map")
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={username}
          placeholder="Input New Username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Create New User</button>
      </form>
    </>
  )
}
