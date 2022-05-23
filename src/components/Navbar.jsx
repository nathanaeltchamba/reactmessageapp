import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">Inbox</Link>
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                  <Link className="nav-link" to="/mail">Sent Mail <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                  <Link className="nav-link" to="/trash">Trash</Link>
              </li>
          </ul>
          <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                  <Link className="nav-link" to="/signin">Sign In <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                  <Link className="nav-link" to="/signup">Sign Up <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item active">
                  <Link className="nav-link" to="/signin">Log Out <span className="sr-only">(current)</span></Link>
              </li>
          </ul>
      </nav>
  )
}
