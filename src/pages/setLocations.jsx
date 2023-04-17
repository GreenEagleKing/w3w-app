import React from "react"
import Header from "../components/Header"
import CreateUser from "../forms/CreateUser"
import CheckUser from "../forms/CheckUser"

export default function SetLocations({
  createUser,
  findUser,
  checkUser,
  handleIsNewUser,
}) {
  return (
    <div className="pageWrapper">
      <section className="container">
        <Header />
        <div className="create-user-container">
          <p>
            Please create a new username or find existing to set new locations.
          </p>
          <div className="create-user-wrapper">
            <CreateUser createUser={createUser} checkUser={checkUser} />
            <CheckUser
              findUser={findUser}
              createUser={createUser}
              handleIsNewUser={handleIsNewUser}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
