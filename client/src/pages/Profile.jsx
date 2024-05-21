import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Profile() {
    const [user, setUser] = useState([])
    useEffect(() => {
        const loginid = localStorage.getItem('login_id');
        axios.get(`http://localhost:5000/register/view_singledata/${loginid}`).then((data) => {

            console.log(data.data.data[0]);
            setUser(data.data.data[0]);

        }).catch((error) => {
            console.log(error);
        })
    }, [])
  return (
<>

     <div style={{ backgroundColor: 'blanchedalmond' }}>
        <div className="d-flex justify-content-center">
          <h4 style={{ color: 'rosybrown', fontFamily: "monospace" }}><b>PROFILE</b></h4><br /></div>
          <div className="d-flex justify-content-center">
    <div className="form_container">
                         <div className="card" style={{ width: "20rem", height: "20rem" }}>

                                <div className="card-body">
                                    <h5 className="card-title"></h5>
                                    <h6 className="card-subtitle mb-2 text-muted"></h6>

                                    <p className="card-text" style={{ fontSize: 10, textAlign: 'left' }}><br />
                                        <b>Username:</b>{user.username}<br /><br />
                                        <b>Phone:</b>{user.phone}<br /><br />
                                        <b>Email:</b>{user.email}<br /><br />
                                        <b>Gender:</b>{user.gender}<br /><br />
                                        <b>Address:</b>{user.address}<br /><br />
                            
                                    </p>
                                    <div className="d-flex justify-content-center">
                                    <Link to={`/updateprofile/${user.loginid}`}>
                                        <a href="#" className="btn btn-primary" style={{ fontSize: 15 }}>
                                            Update
                                        </a>
                                    </Link>

                                  </div>
                        {/* </div>  */}

                                </div>
                                </div>
                            </div>
                        </div></div>
                        </>
  )
}
