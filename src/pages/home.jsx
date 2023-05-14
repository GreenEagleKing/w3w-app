import Header from "../components/Header"
import Lottie from "lottie-react"
import mapMarker from "../assets/mapMarker.json"
import { Link } from "react-router-dom"
import { useEffect } from "react"

export default function Home({ resetState }) {
  useEffect(() => {
    resetState()
  })

  return (
    <div className="pageWrapper">
      <section className="container">
        <Header />
        <div className="welcome-container">
          <p className="p-centered">
            Welcome to Password Recovery using What3Words, an alternative to
            security questions. Recover a forgotten password using What3Words
            locations globally to validate and retrieve passwords.
          </p>
          <Lottie id="mapMarker" animationData={mapMarker} loop={true} />
          <div className="location-input-container">
            <Link to="/setLocations">
              <button className="bn30">{`Start`}</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
