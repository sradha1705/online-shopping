import axios from 'axios'
import React, { useState } from 'react'


export default function Register() {

  const [input, setInput] = useState({

    username: '',
    password: '',
    phone: '',
    email: '',
    gender: '',
    pin: '',
    address: ''

  })
  
  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  // console.log(formError);

  const change = (event) => {

    const name = event.target.name
    const value = event.target.value

    setInput({ ...input, [name]: value })

  }
  const validate = (value) => {
    console.log(value);
    const phone = /^[6-9]\d{9}$/;
    const email = /^\w+([\.-]?\w+)*@\w+([\.-]?\W+)*(\.\w{2,3})+$/;
    const error = {}

    if (value.username == '') {
      error.username = 'Enter username'
    }
    if (value.password == '') {
      error.password = 'Enter password'
    }
    if (value.phone == '') {
      error.phone = 'Enter phone'
    }
    else if (!phone.test(value.phone)) {
      error.phone = 'Enter a valid number'
    }
    if (value.email == '') {
      error.email = 'Enter email'
    }
    else if (!email.test(value.email)) {
      error.email = 'Enter a valid email'
    }
    if (value.address == '') {
      error.address = 'Enter address'
    }
    if (value.pin == '') {
      error.pin = 'Enter pin'
    }
    return error

  }
  const submit = (e) => {
    e.preventDefault()
    setFormError(validate(input))
    setIsSubmit(true)
    // console.log('ertyu');
    if (Object.keys(formError).length == 0 && isSubmit == true) {
      console.log(input);
      axios.post('http://localhost:5000/register/add_reg', input).then((data) => {
        console.log(data);

        // navigate('/login')

      }).catch((error) => {
        console.log(error);
      })
    }
  }
  return (
    <>
    <div style={{backgroundColor:'blanchedalmond'}}>
      <div className="d-flex justify-content-center">

        <h4>REGISTER</h4><br />
      </div>
      <div className="d-flex justify-content-center">
        <form onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><b>Username</b></label>
            <span style={{ color: 'red' }}>{formError.username}</span>
            <input
              type="text"
              name='username'
              onChange={change}
              onClick={() => { setFormError({ ...formError, username: '' }) }}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter username"
            />
            {/* <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small> */}
          </div>

          <div className="form-group" >
            <label htmlFor="exampleInputPassword1"><b>Password</b></label>
            <span style={{ color: 'red' }}>{formError.password}</span>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              name='password'
              onChange={change}
              onClick={() => { setFormError({ ...formError, password: '' }) }}

            />
          </div>

          <div className="form-row">
            {/* <div className="form-group col-sm-12"> */}
            <label><b>Gender</b></label>
            <div className="radio">
              <label>&nbsp;&nbsp;
                <input type="radio" value="male" name='gender' checked={true} />
                Male
              </label>
            </div>
            <div className="radio">
              <label>&nbsp;&nbsp;
                <input type="radio" value="female" name='gender' />
                Female
              </label>
            </div>
            <div className="radio">
              <label>&nbsp;&nbsp;
                <input type="radio" value="others" name='gender' />
                Others
              </label>
              {/* </div> */}
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><b>email</b></label>
            <span style={{ color: 'red' }}>{formError.email}</span>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Email"
              name='email'
              onChange={change}
              onClick={() => { setFormError({ ...formError, email: '' }) }}


            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><b>Phone number</b></label>
            <span style={{ color: 'red' }}>{formError.phone}</span>
            <input
              type="phone"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Phonenumber"
              name='phone'
              onChange={change}
              onClick={() => { setFormError({ ...formError, phone: '' }) }}

            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><b>Address</b></label>
            <span style={{ color: 'red' }}>{formError.address}</span>
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Address"
              name='address'
              onChange={change}
              onClick={() => { setFormError({ ...formError, address: '' }) }}

            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1"><b>PIN code</b></label>
            <span style={{ color: 'red' }}>{formError.pin}</span>

            <input
              type="pin"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter Pin code"
              name='pin'
              onChange={change}
              onClick={() => { setFormError({ ...formError, pin: '' }) }}

            /><br />
          </div>

          {/* <div className="form-group form-check">
      <input type="checkbox" className="form-check-input" id="exampleCheck1" />
      <label className="form-check-label" htmlFor="exampleCheck1">
        Check me out
      </label>
    </div> */}
          <br />
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div></div>
    </>
  )
}
