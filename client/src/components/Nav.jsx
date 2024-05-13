import React from 'react'

export default function Nav() {
  return (
    <div>
         <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{width:1000}}>
         
   <div className="navbar bg-dark border-bottom border-body"
    data-bs-theme="dark">
 
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
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            About
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
           Contact
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
               As Admin
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
               As User
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="#">
               Register
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
  </div>
</nav>

    </div>
  )
}