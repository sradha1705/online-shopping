import React from 'react'
import Nav from '../components/Nav'

export default function Home() {
  return (
    <>
      <>
      <section>
        <div className="hero_area">
          <header className="header_section">
            <div className="container-fluid" >

              <Nav />
            </div>
          </header>
        </div><br />
        </section>
      </>

      <>
        {/* carousel */}<br /><br /><section>
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
      <img src="..images/images.png." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Incredible prices on all your favourite item.</h5>
        <p>Get more for less on selected brand</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="Get more for less on selected brand" className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Incredible prices on all your favourite item.</h5>
        <p>Get more for less on selected brand.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
      <div className="carousel-caption d-none d-md-block">
        <h5>Incredible prices on all your favourite item.</h5>
        <p>Get more for less on selected brand.</p>
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

        </section>

        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src="images/images.png." className="card-img-top" alt="..." />
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

