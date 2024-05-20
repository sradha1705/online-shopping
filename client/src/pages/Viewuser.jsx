import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Nav from '../components/Nav';

export default function Viewuser() {
    const [user, setUser] = useState([])
    // const [userData, setUserData] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5000/register/view_user_reg").then((data) => {
            console.log(data.data.data);
            setUser(data.data.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    console.log(user);


    return (
      
        <div style={{ backgroundColor: 'blanchedalmond' }}>
              <Nav/>
              <div className="d-flex justify-content-center">
          <h2 style={{ color: 'rosybrown', fontFamily: "monospace" }}><b>USER DETAILS</b></h2><br />
</div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">NAME</th>
                        <th scope="col">GENDER</th>
                        <th scope="col" rowSpan={2}>ADDRESS</th>
                        <th scope="col">EMAIL</th>
                        <th scope="col">PHONE</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            user.map((data, key) => (

                                <tr>
                                    <td>{data.username}</td>
                                    <td>{data.gender}</td>
                                    <td rowSpan={2}>{data.address}</td>
                                    <td>{data.email}</td>
                                    <td>{data.phone}</td>

                                </tr>
                        ))
                    }

                </tbody>
            </table>

        </div>
    )
}
