import React from "react"
import { useState } from "react"

export default function CreateUser({ createUser }) {
  const [username, setUsername] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    createUser(username)
    console.log(username)
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
