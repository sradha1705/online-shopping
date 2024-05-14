import React from 'react'

export default function Register() {
  return (
    <>
    
    <h4>REGISTER</h4><br/>

<div className="d-flex justify-content-center">
<form style={{alignItems:'center'}}>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1"><b>Username</b></label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter username"
      /><br/>
      {/* <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small> */}
    </div>

    <div className="form-group">
      <label htmlFor="exampleInputPassword1"><b>Password</b></label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      /><br/>
    </div>

    <div className="form-group">
      <label htmlFor="exampleInputEmail1"><b>Address</b></label>
      <input
        type="text"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter Address"
      /><br/>
      </div>
    
      <div className="form-group">
      <label htmlFor="exampleInputEmail1"><b>PIN code</b></label>
      <input
        type="pin"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        placeholder="Enter Pin code"
      /><br/>
      </div>

    {/* <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div> */}
    <br/>
    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
  </div>
  </>
  )
}
