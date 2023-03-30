import React from 'react';
import axios from 'axios';
import {useState, useEffect} from "react";
import { useParams, useNavigate } from 'react-router-dom';

const UpdateUser = (props) => {
    const {update}=props;
    let {userId}=useParams();
    const navigate = useNavigate();
    const [userData,setUserData] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:4000/users/${userId}`).then((res)=>setUserData(res.data));
    },[userId]);
    const handleChange=(e)=>{
        const {value,name}=e.target;
        setUserData((oldData)=>({...oldData,[name]:value }))
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        update(userData);
        setUserData({name:"",age:"",email:""});
        navigate("../");
    }
    return (
        <div class="form-style">
            <h1>User Data</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Your Name" value={userData.name} onChange={handleChange}></input>
                <input type="number" name="age" placeholder="Enter Your Age" value={userData.age} onChange={handleChange}></input>
                <input type="email" name="email" placeholder="Enter Your Email Address" value={userData.email} onChange={handleChange}></input>
                <input type="submit" value="UPDATE" />
            </form>
        </div>
    );
};

export default UpdateUser;