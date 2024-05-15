import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary"   >

        <div className="navbar bg-dark border-bottom border-body"
          data-bs-theme="dark" style={{width: "-webkit-fill-available"}}>

          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              TECH HUB
            </a>
            
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div style={{alignItems:"left"}}>

            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                  <Link to={"/home"}>Home</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <Link to={"/about"}>About</Link>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                  <Link to={"/contact"}>Contact</Link>
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    LOG IN
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                      <Link to={"/login"}>As Admin</Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      <Link to={"/login"}>As user</Link>
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                      <Link to={"/register"}>Register</Link>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div></div>
          </div>
        </div>
      </nav>

    </>
  )
}
