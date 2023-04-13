import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function CheckUser({ findUser, handleIsNewUser }) {
  const [username, setUsername] = useState("")
  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault()
    try {
      await findUser(username)
      handleIsNewUser(username)
      navigate("/map")
    } catch (error) {
      throw error
    }
  }

  return (
    <div className="user-wrapper">
      <form>
        <input
          type="text"
          value={username}
          placeholder="Input your username"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <button onClick={handleSubmit} className="bn30">
          Find & Update User
        </button>
      </form>
    </div>
  )
}
