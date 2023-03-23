import React from "react"
import Header from "../components/Header"
import CreateUser from "../forms/CreateUser"
import CheckUser from "../forms/CheckUser"

export default function SetLocations({ data }) {
  return (
    <>
      <Header />
      <div>
        <p>
          Welcome to password recovery using what3words. Please create a new
          username or input existing.
        </p>
        <CreateUser />
        <CheckUser />
      </div>
    </>
  )
}
