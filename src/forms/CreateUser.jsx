import React from "react"

export default function CreateUser() {
  async function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <>
      <form>
        <input placeholder="Input New Username"></input>
        <button onClick={handleSubmit}>Create New User</button>
      </form>
    </>
  )
}
