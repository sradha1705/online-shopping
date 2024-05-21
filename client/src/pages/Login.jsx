import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  // const role = localStorage.getItem('role')
  const navigate = useNavigate()
  const [input, setInput] = useState({

    username: '',
    password: '',

  })


  const [formError, setFormError] = useState({})
  const [isSubmit, setIsSubmit] = useState(false)
  // console.log(formError);
  const change = (event) => {

    const name = event.target.name
    const value = event.target.value

    setInput({ ...input, [name]: value })
  }

  const login = () => {
    if (localStorage == null) {

    }

  }
  const validate = (value) => {
    const error = {}

    if (value.username == '') {
      error.username = 'Enter username'
    }
    if (value.password == '') {
      error.password = 'Enter password'
    }
    return error
  }

  const submit = (e) => {
    e.preventDefault()
    setFormError(validate(input))
    setIsSubmit(true)
    if (Object.keys(formError).length == 0 && isSubmit == true) {
      console.log(input);

      axios.post('http://localhost:5000/login/login_data', input).then((data) => {
        console.log(data);

        localStorage.setItem('login_id', data.data.data._id);
        localStorage.setItem('role', data.data.data.role);
        localStorage.setItem('username', data.data.data.username);

        navigate('/home')

      }).catch((error) => {

        console.log(error);

      })
    }
  }

  return (
    <>

      <div style={{ backgroundColor: 'blanchedalmond' }}>
        <div className="d-flex justify-content-center">
          <h4 style={{ color: 'rosybrown', fontFamily: "monospace" }}>LOGIN</h4><br /></div>
        <div className="d-flex justify-content-center">
          <form onSubmit={submit}>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Username</label>
              <span style={{ color: 'red' }}>{formError.username}</span>
              <input
                type="text"
                onChange={change}
                onClick={() => { setFormError({ ...formError, username: '' }) }}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name='username'
                placeholder="Enter username"
              /><br />

            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1">Password</label>
              <span style={{ color: 'red' }}>{formError.password}</span>
              <input
                type="password"
                name='password'
                onChange={change}
                onClick={() => { setFormError({ ...formError, password: '' }) }}
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              /><br />
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button><br />
            <a href='/forgotpassword' ><b>Forgot Password</b></a>
            {/* {role == 'admin' ? */}
              <div></div>
              {/* : */}
              <p style={{ color: 'red' }}><b>NOT YET REGISTER? &nbsp;</b>
                <a href='/register' style={{ color: 'red' }}><b>REGISTER NOW</b></a></p>
            {/* } */}
          </form></div>
      </div>

    </>
  )
}
