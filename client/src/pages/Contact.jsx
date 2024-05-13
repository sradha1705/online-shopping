import React from 'react'

export default function Contact() {
  return (
    <div><header>
        <h4>CONTACT</h4><br/>
    </header>
        <form>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Email address</label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="name@example.com"
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Name</label>
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="abc"
    />
  </div>
  <div className="form-group">
    <label htmlFor="exampleFormControlInput1">Phone </label>
    <input
      type="text"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="98076*****"
    />
  </div>
  
  
  <div className="form-group">
    <label htmlFor="exampleFormControlTextarea1">Feedback</label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={3}
      defaultValue={""}
      
    />
    <br/>
    <button type="button" className="btn btn-info">
  send
</button>

  </div>
</form>

    </div>
  )
}
