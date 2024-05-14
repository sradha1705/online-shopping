import React from 'react'

export default function Login() {
  return (
    <div><header>
    <h4>LOGIN</h4><br/>
</header>
<div className="d-flex justify-content-center">
<form>
    <div className="form-group">
      <label htmlFor="exampleInputEmail1">Username</label>
      <input
        type="email"
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
      <label htmlFor="exampleInputPassword1">Password</label>
      <input
        type="password"
        className="form-control"
        id="exampleInputPassword1"
        placeholder="Password"
      /><br/>
    </div>
    {/* <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div> */}<br/>
    <button type="submit" className="btn btn-primary">
      Submit
    </button><br/>
    <a href='/forgotpassword'>Forgot Password</a>
  </form></div>
  </div>
  )
}
