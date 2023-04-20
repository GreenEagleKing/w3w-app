import React from "react"
import { Link, useNavigate } from "react-router-dom"
import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import KeyboardBackspaceRoundedIcon from "@mui/icons-material/KeyboardBackspaceRounded"

export default function Navigation({ notResultPage }) {
  const navigate = useNavigate()

  return (
    <div className="nav-wrapper">
      <span className="nav">
        {!notResultPage && (
          <KeyboardBackspaceRoundedIcon onClick={() => navigate(-1)} />
        )}
        <Link to="/">
          <HomeRoundedIcon />
        </Link>
      </span>
    </div>
  )
}
