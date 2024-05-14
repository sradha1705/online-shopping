import React from 'react'

export default function Card() {
  return (
    <div> <div className="card">
    <img src="./images/card2.jpg"  style={{height:'300px',width:'400px'}}className="card-img-top" alt="..." />
    <div className="card-body"><p>Holiday Deals</p>
      <h5 className="card-title">Up to 30% off</h5><p>On Selected Smartphone Brands</p>
      <button type="button" className="btn btn-primary">
        Shop Now
      </button>
    </div>
  </div></div>
  )
}
