import './App.css'
import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js'
import SignIn from './pages/SignIn.js'
import SignUp from './pages/SignUp.js'
import Header from './components/Header/Header.js'

function App() {
  return (
    <Router>
      <Main />
    </Router>
  )
}

function Main() {
  const location = useLocation()
  const hideHeader =
    location.pathname === '/SignIn' || location.pathname === '/SignUp'

  return (
    <div className="App">
      <Navbar />
      {!hideHeader && <Header />}
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </div>
  )
}

export default App
