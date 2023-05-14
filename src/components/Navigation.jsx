import { Link, useNavigate, useLocation } from "react-router-dom"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded"
import { useEffect, useState } from "react"

export default function Navigation() {
  const navigate = useNavigate()
  const [hideNavBackBtn, setHideNavBackBtn] = useState(true)
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.includes("result")) {
      setHideNavBackBtn(false)
    }
  })

  return (
    <div className="nav-wrapper">
      <span className="nav">
        {hideNavBackBtn && (
          <KeyboardBackspaceRoundedIcon onClick={() => navigate(-1)} />
        )}
        <Link to="/">
          <HomeRoundedIcon />
        </Link>
      </span>
    </div>
  )
}
