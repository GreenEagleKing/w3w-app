import React, { useEffect } from "react"
import Header from "../components/Header"
import CreateUser from "../forms/CreateUser"
import CheckUser from "../forms/CheckUser"
import RetrieveLocation from "../forms/RetrieveLocation"

export default function SetLocations({
  createUser,
  findUser,
  checkUser,
  handleIsNewUser,
  handleUpdateUser,
}) {
  useEffect(() => {
    let resetUpdateUser = true
    handleUpdateUser(resetUpdateUser)
  })

  return (
    <div className="pageWrapper">
      <section className="container">
        <Header />
        <div className="create-user-container">
          <p>
            Please create a new username or find existing to set new locations.
          </p>
          <div className="create-user-wrapper">
            <RetrieveLocation
              findUser={findUser}
              handleIsNewUser={handleIsNewUser}
              handleUpdateUser={handleUpdateUser}
            />
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
