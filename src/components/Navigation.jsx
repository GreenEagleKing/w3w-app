import React from "react"
import { Link, useNavigate } from "react-router-dom"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded"

export default function Navigation() {
  const navigate = useNavigate()

  return (
    <div className="nav-wrapper">
      <span className="nav">
        <KeyboardBackspaceRoundedIcon onClick={() => navigate(-1)} />
        <Link to="/">
          <HomeRoundedIcon />
        </Link>
      </span>
    </div>
  )
}
