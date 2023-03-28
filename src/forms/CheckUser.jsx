import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CheckUser({ findUser, handleIsNewUser }) {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  function handleSubmit(e) {
    // e.preventDefault()
    findUser(username)
    handleIsNewUser(username)
    navigate("/map")
  }

  return (
    <>
      <form>
        <input
          type="text"
          value={username}
          placeholder="Input your username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button onClick={handleSubmit}>Find User</button>
      </form>
    </>
  )
}
