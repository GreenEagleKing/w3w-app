import React, { useEffect } from "react"
import Header from "../components/Header"
import CreateUser from "../forms/CreateUser"
import CheckUser from "../forms/CheckUser"
import RetrieveLocation from "../forms/RetrieveLocation"

export default function SetLocations({
  createUser,
  findUser,
  isNewUser,
  handleIsNewUser,
  handleUpdateUser,
  handleIsRetrieving,
  handleIsCreated,
  resetState,
}) {
  useEffect(() => {
    resetState()
  })

  return (
    <div className="pageWrapper">
      <section className="container">
        <Header />
        <div className="create-user-container">
          <p className="p-centered">
            Please create a new username or find existing to set new locations.
          </p>
          <div className="create-user-wrapper">
            <RetrieveLocation
              findUser={findUser}
              handleIsRetrieving={handleIsRetrieving}
            />
            <CreateUser
              createUser={createUser}
              isNewUser={isNewUser}
              findUser={findUser}
              handleIsNewUser={handleIsNewUser}
              handleIsCreated={handleIsCreated}
            />
            <CheckUser
              findUser={findUser}
              createUser={createUser}
              handleUpdateUser={handleUpdateUser}
              handleIsCreated={handleIsCreated}
            />
          </div>
        </div>
      </section>
    </div>
  )
}
