import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
        <Header />
        <div>
            <p>Welcome to password recovery using what3words. Please confirm username is correct by clicking the button below</p>
            <Link to="/map">
                <button>Confirm UserName</button>
            </Link>
        </div>
    </div>
  )
}
