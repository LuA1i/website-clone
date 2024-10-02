import './App.css'
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.js'
import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
