import React from 'react'
import Nav from '../components/Nav'
import Card from '../components/Card'

export default function Home() {
  return (
    <>
      <Nav />

      <div style={{ backgroundColor: 'blanchedalmond' }}>
        {/* carousel */}<br /><br /><section style={{ backgroundColor: 'blanchedalmond' }}>
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
                <img src={'./images/carousel1.jpg'} style={{ height: '500px', width: '50px' }} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5 ><b>Incredible prices on all your favourite item.</b></h5>
                  <p>Get more for less on selected brand</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={'./images/carousel2.jpg'} style={{ height: '500px', width: '10px' }} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Incredible prices on all your favourite item.</h5>
                  <p>Get more for less on selected brand.</p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={'./images/carousel3.jpg'} style={{ height: '500px', width: '10px' }} className="d-block w-100" alt="..." />
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
        <div className="d-flex justify-content-center">
          <h2 style={{color:'rosybrown',fontFamily:"monospace"}}><b>Offers and Deals</b></h2>
        </div>
        <div className="row row-cols-1 row-cols-md-4 g-4"><br />
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
          <div className="col">
            <Card />
          </div>
        </div>
      </div>

      <nav className="nav" >


        <a className="navbar-brand" href="#">
          <img
            src="./images/logo1.png"
            alt=""
            width={100}
            height={100}
          /> Curb side pickup
        </a> &nbsp;&nbsp;&nbsp;&nbsp;

        <a className="navbar-brand" href="#">
          <img
            src="./images/logo2.png"
            alt=""
            width={100}
            height={100}
          />  Free delivery for orders over Rs:1000
        </a>  &nbsp;&nbsp;&nbsp;&nbsp;

        <a className="navbar-brand" href="#">
          <img
            src="./images/logo3.png"
            alt=""
            width={100}
            height={100}
          />  Low price guarentee
        </a>  &nbsp;&nbsp;&nbsp;&nbsp;

        <a className="navbar-brand" href="#">
          <img
            src="./images/logo4.png"
            alt=""
            width={100}
            height={100}
          />  Available to you 24X7
        </a>


      </nav>



    </>
  )
}

