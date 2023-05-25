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
          <div className="create-user-wrapper">
            <div className="retrieve-location-wrapper">
              <p className="p-centered">
                Retrieve password if you have already setup your locations
              </p>
              <RetrieveLocation
                findUser={findUser}
                handleIsRetrieving={handleIsRetrieving}
              />
            </div>

            <div className="horizontal-line"></div>

            <div className="newUpdate-location-wrapper">
              <p id="newUpdate-p" className="p-centered">
                Or create a new username or find an existing user to update
                locations
              </p>
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
        </div>
      </section>
    </div>
  )
}
