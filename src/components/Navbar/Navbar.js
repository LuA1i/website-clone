import React from 'react'
import { Link } from 'react-router-dom'
import '../Navbar/Navbar.css'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link className="title" to={'/'}>
          conduit
        </Link>
      </div>
      <div className="links">
        <Link className="link" to={'/'}>
          Home
        </Link>
        <Link className="link" to={'/SignIn'}>
          Sign In
        </Link>
        <Link className="link" to={'/SignUp'}>
          Sign Up
        </Link>
      </div>
    </div>
  )
}

export default Navbar
