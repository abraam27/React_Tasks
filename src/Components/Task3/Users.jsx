import React from 'react';

import "./users.css";

const Users = (props) => {
    const {data}=props;
    console.log(data)
    return (
        <>
        <h1>The Users</h1>
          <table id="users">
              <tr>
                  <th>Name</th>
                  <th>Age</th>
                  <th>Email</th>
              </tr>
              {data.map((u)=><tr key={u.id}>
                {u.name&&<td>{u.name}</td>}
                {u.age&&<td>{u.age}</td>}
                {u.email&&<td>{u.email}</td>}
              </tr>)}
          </table>
        </>
    );
};

export default Users;