import axios from 'axios';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import "../Styles/Users.css";
import { getAllUsers } from '../redux/actionCreators';
const Users = () => {
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
      axios.get('http://localhost:4000/users').then((res)=>{
      console.log(res.data)
        dispatch(getAllUsers(res.data))
      }
      );
    },[]);
    const usersArr = useSelector((state)=>state.users);
    console.log(usersArr);
    const deleteUser = (id)=>{
      axios.delete(`http://localhost:4000/users/${id}`).then(
        window.location.reload(false)
      )
    }
    return (
        <>
        <h1>The Users</h1>
          <table id="users">
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
                  <th>Details</th>
                  <th>Edit</th>
                  <th>Delete</th>
              </tr>
              {usersArr?.map((u)=><tr key={u.id}>
                {u.name&&<td>{u.name}</td>}
                {u.age&&<td>{u.age}</td>}
                {u.email&&<td>{u.email}</td>}
                <td><Link to={`/userDetails/${u.id}`}><img className="imgIcons" src="images/details.png" alt="deatils"></img></Link></td>
                <td><Link to={`/users/update/${u.id}`}><img className="imgIcons" src="images/edit.png" alt="edit"></img></Link></td>
                <td><button onClick={() => deleteUser(u.id)}><img className="imgIcons" src="images/waste.png" alt="delete"></img></button></td>
              </tr>)}
          </table>
        </>
    );
};

export default Users;