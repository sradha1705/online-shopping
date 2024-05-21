import React from 'react'

export default function Contact() {
  return (
    <div><div style={{ backgroundColor: 'blanchedalmond' }}>
      <div className="d-flex justify-content-center">

        <h4 style={{ color: 'rosybrown', fontFamily: "monospace" }}>CONTACT US</h4><br />
      </div>
      <div className="d- justify-content-left">

      <h6 style={{ color: 'rosybrown', fontFamily: "monospace" }}><b>STORE LOCATION</b></h6>
<p style={{ color: 'blue', fontFamily: "monospace" }}>
TECH HUB STORE<br/>
500 Terry Francine Street<br/>
Benguluru, PIN 604158<br/>
techhub@mysite.com<br/>

+91 1234567890</p>


<h6 style={{ color: 'rosybrown', fontFamily: "monospace" }}><b>OPENING HOURS</b></h6>
<p style={{ color: 'blue', fontFamily: "monospace" }}>
      Mon - Fri: 8am - 8pm<br/>
      Saturday: 9am - 7pm<br/>
      Sunday: 9am - 8pm<br/>
      </p>
</div>
      <div className="d-flex justify-content-left">

        <h4 style={{ color: 'rosybrown', fontFamily: "monospace" }}>We're here to help!</h4><br />
      </div>
     
      <p>
Fill out the form with any query on your mind and we'll get back to you as soon as possible</p>
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
          <label htmlFor="exampleFormControlTextarea1">Message</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows={3}
            defaultValue={""}

          />
          <br />
          <button type="button" className="btn btn-info">
            send
          </button>

        </div>
      </form>
    </div>

</div>

  )
}
