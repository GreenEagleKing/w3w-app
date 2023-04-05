import React from "react"
import Header from "../components/Header"
import CreateUser from "../forms/CreateUser"
import CheckUser from "../forms/CheckUser"

export default function SetLocations({
  createUser,
  findUser,
  handleIsNewUser,
}) {
  return (
    <div className="pageWrapper">
      <Header />
      <div>
        <p>
          Welcome to password recovery using what3words. Please create a new
          username or input existing.
        </p>
        <CreateUser createUser={createUser} />
        <CheckUser
          findUser={findUser}
          createUser={createUser}
          handleIsNewUser={handleIsNewUser}
        />
      </div>
    </div>
  )
}
