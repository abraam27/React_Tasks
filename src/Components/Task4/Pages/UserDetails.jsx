import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import { useParams } from 'react-router-dom';

const UserDetails = (props) => {
    let {userId}=useParams();
    const [userData,setUserData] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:4000/users/${userId}`).then((res)=>setUserData(res.data));
    },[userId]);
    return (
        <>
        <h1>The User ID : {userId}</h1>
          <table id="users">
              <tr>
                  <th>Name</th>
                  {userData.name&&<td>{userData.name}</td>}
              </tr>
              <tr>
                  <th>Age</th>
                  {userData.age&&<td>{userData.age}</td>}
              </tr>
              <tr>
                  <th>Email</th>
                  {userData.email&&<td>{userData.email}</td>}
              </tr>
          </table>
        </>
    );
};

export default UserDetails;