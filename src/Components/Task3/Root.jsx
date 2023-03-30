import React from 'react';
import UserForm from './UserForm';
import Users from './Users';
import {useState} from "react";
import { v4 as uuid } from "uuid";
const Root = () => {
    const [users,setUsers]= useState([]);
    const addUser=(user)=>{
        console.log(user);
        setUsers((oldUsers)=>[...oldUsers,{...user, id:uuid()}]);
    }
    return (
       <>
       <UserForm add={addUser} ></UserForm>
       <Users data={users}></Users>
       </>
    );
};

export default Root;