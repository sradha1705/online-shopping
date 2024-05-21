import React, { useEffect } from 'react'
import { Link, useNavigate,  } from 'react-router-dom'

export default function Nav() {
  const role = localStorage.getItem('role')
  const navigate=useNavigate()
  console.log(role);
  const logout = () => {
    console.log('hi');
    localStorage.clear()
    navigate('/')
  }
  useEffect(() => {
    if (!role) {
      navigate('/')
    }
  }, [])
  return (
    <>
      {role == 'admin' ?
        <nav className="navbar navbar-expand-lg bg-body-tertiary"   >

          <div className="navbar bg-dark border-bottom border-body"
            data-bs-theme="dark" style={{ width: "-webkit-fill-available" }}>

            <div className="container-fluid">
              <a className="navbar-brand" href="#" style={{ color: 'rosybrown', fontFamily: "monospace" }}>
                <b>TECH HUB</b>
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
              <div style={{ alignItems: "left"  }}>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#" style={{ color: 'rosybrown', fontFamily: "monospace" }}>
                        <Link to={"/home"} style={{ color: 'rosybrown', fontFamily: "monospace" }}>Home</Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <Link to={"/userdetail"} style={{ color: 'rosybrown', fontFamily: "monospace" }}>User Details</Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <Link to={"/userdetail"} style={{ color: 'rosybrown', fontFamily: "monospace" }}>Feedbacks</Link>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Purchase Info</Link>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a style={{ color: 'rosybrown', fontFamily: "monospace" }}
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Menu
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <a className="dropdown-item" href="#">
                            <Link to={"/product"} style={{ color: 'rosybrown', fontFamily: "monospace" }}>Add Product</Link>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <Link to={"/viewproduct"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>View Product</Link>
                          </a>
                        </li>
                        <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Laptops & Computers</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Audio</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>TV & Home Cinema</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Smartphones</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>SmartWatches</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Tablets</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Best Sellers</Link>
                </a>
              </li>
                        <li>
                          <a className="dropdown-item" href="#">
                          <a onClick={logout}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Logout</a> 
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div></div>
            </div>
          </div>
        </nav>

:

role == 'user' ?
<nav className="navbar navbar-expand-lg bg-body-tertiary"   >

<div className="navbar bg-dark border-bottom border-body"
  data-bs-theme="dark" style={{ width: "-webkit-fill-available" }}>

  <div className="container-fluid">
    <a className="navbar-brand" href="#"style={{ color: 'rosybrown', fontFamily: "monospace" }}>
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
    <div style={{ alignItems: "left" }}>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">
              <Link to={"/home"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Home</Link>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to={"/about"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>About</Link>
            </a>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <Link to={"/contact"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Contact</Link>
            </a>
            
          </li>
          <li className="nav-item">
                      <a className="nav-link" href="#">
                        <Link to={"/profile"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Profile</Link>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>My Orders</Link>
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
              Menu
            </a>
            <ul className="dropdown-menu">
            <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/viewproduct"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Shop All</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Laptops & Computers</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Audio</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>TV & Home Cinema</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Smartphones</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>SmartWatches</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Tablets</Link>
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  <Link to={"/"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Best Sellers</Link>
                </a>
              </li>

              <li>
                <a className="dropdown-item" href="#">
                <a onClick={logout}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Logout</a> 
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div></div>
  </div>
</div>
</nav>
        :
        <nav className="navbar navbar-expand-lg bg-body-tertiary"   >

          <div className="navbar bg-dark border-bottom border-body"
            data-bs-theme="dark" style={{ width: "-webkit-fill-available" }}>

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
              <div style={{ alignItems: "left" }}>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" href="#">
                        <Link to={"/home"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Home</Link>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <Link to={"/about"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>About</Link>
                      </a>
                    </li>

                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        <Link to={"/contact"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Contact</Link>
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a style={{ color: 'rosybrown', fontFamily: "monospace" }}
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
                            <Link to={"/login"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>As Admin</Link>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <Link to={"/login"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>As user</Link>
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            <Link to={"/register"}style={{ color: 'rosybrown', fontFamily: "monospace" }}>Register</Link>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div></div>
            </div>
          </div>
        </nav>
      }
    </>
  )
}
