import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='Navbar'>
            <div className='heading'>
                <p>GJ GLOBAL VENTURES</p>
            </div>
            <div className='Menu'>
              <Link to="/"><p>Home</p></Link>
              <Link to="/services"><p>Services</p></Link>
              <Link to="/contact"><p>Contact</p></Link>
              <Link to="/login"><p>Login</p></Link>
              <Link to="/"><p>About</p></Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar