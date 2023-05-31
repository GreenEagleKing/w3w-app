import { Link } from "react-router-dom"
import { useEffect } from "react"
import { ReactComponent as W3WRedLogo } from "../assets/W3W-Logo/w3w_Symbol_RGB_Red.svg"

export default function Home({ resetState }) {
  useEffect(() => {
    resetState()
  })

  return (
    <div className="pageWrapper">
      <Link to="/welcome" className="link">
        <section className="intro-section">
          <div className="intro-title-container">
            <W3WRedLogo width={100} height={100} />
            <h1 id="intro-title">PassMap</h1>
          </div>
          <div>Enter</div>
        </section>
      </Link>
    </div>
  )
}
