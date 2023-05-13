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
  handleIsRetrieving,
  handleUpdateUser,
  handleIsCreating,
  resetState,
}) {
  useEffect(() => {
    resetState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
              handleIsRetrieving={handleIsRetrieving}
            />
            <CreateUser
              createUser={createUser}
              checkUser={checkUser}
              handleIsCreating={handleIsCreating}
            />
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
