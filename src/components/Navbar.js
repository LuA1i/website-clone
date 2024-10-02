import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <Link to={'/'}>conduit</Link>
      </div>
      <div className="links">
        <Link to={'/SignIn'}>Sign In</Link>
        <Link to={'/SignUp'}>Sign Up</Link>
      </div>
    </div>
  )
}

export default Navbar
