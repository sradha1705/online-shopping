import React from 'react'

export default function Home() {
  return (
    <>
      <>
        <div className="hero_area">
          <header className="header_section">
            <div className="container-fluid" >

              <nav className="navbar navbar-dark bg-dark">
                <nav className="navbar navbar-expand-lg custom_nav-container">
                  <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                      <span>TECHHUB</span>
                    </a>
                    <div className=" navbar-collapse" id="" style={{ alignItems: 'flex-end' }}>
                      <div className="user_option">
                        <a className="nav-link" href="#">
                          Home
                        </a>&nbsp;&nbsp;
                        <a className="nav-link" href="#">
                          About
                        </a>&nbsp;&nbsp;
                        <a className="nav-link" href="#">
                          Contact
                        </a>&nbsp;&nbsp;
                        <a className="nav-link" href="#">
                          Log In
                        </a>&nbsp;&nbsp;
                        <a className="nav-link" href="#">
                          Wishlist
                        </a>&nbsp;&nbsp;
                      </div>
                    </div>
                  </div>
                </nav>
              </nav>
            </div></header></div>
      </>
      <>
        {/* carousel */}
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={0}
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={1}
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={2}
              aria-label="Slide 3"
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="..." className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>First slide label</h5>
                <p>Incredible price for all your favourites</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Second slide label</h5>
                <p>Incredible price for all your favourites</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <h5>Third slide label</h5>
                <p>Incredible price for all your favourites</p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>


        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <button type="button" className="btn btn-primary">
                  Shop Now
                </button>

              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <button type="button" className="btn btn-primary">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  )
}

