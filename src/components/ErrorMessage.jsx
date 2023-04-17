import React from "react"

export default function ErrorMessage({ error }) {
  return (
    <>
      <div className="error-container">
        <p>Error :</p>
        <p>{error}</p>
      </div>
    </>
  )
}
