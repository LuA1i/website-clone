import React from 'react'
import { Link } from 'react-router-dom'
import '../pages/details.css'
const SignUp = () => {
  return (
    <div className="form-container">
      <h1>Sign Up</h1>
      <Link>Have an Account</Link>
      <form action="">
        <input type="text" placeholder="Username" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Username" />
      </form>
      <button className='signUp-btn'>SignUp</button>
    </div>
  )
}

export default SignUp
