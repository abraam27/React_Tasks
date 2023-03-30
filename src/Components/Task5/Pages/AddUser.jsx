import "../Styles/AddUser.css";
import {useState} from 'react';
import { useNavigate  } from "react-router-dom";

const AddUser = (props) => {
    const {add}=props;
    const navigate = useNavigate();
    const [userData,setUserData] = useState({name:"",age:"",email:""});
    const handleChange=(e)=>{
        const {value,name}=e.target;
        setUserData((oldData)=>({...oldData,[name]:value }))
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(userData);
        add(userData);
        setUserData({name:"",age:"",email:""});
        navigate("../");
        // window.location.reload();
    }
    return (
        <div class="form-style">
            <h1>User Data</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Your Name" value={userData.name} onChange={handleChange}></input>
                <input type="number" name="age" placeholder="Enter Your Age" value={userData.age} onChange={handleChange}></input>
                <input type="email" name="email" placeholder="Enter Your Email Address" value={userData.email} onChange={handleChange}></input>
                <input type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddUser;