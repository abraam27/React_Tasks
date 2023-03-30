// import Movies from '../Components/Task1/Movie/Movies';
// import Movies2 from '../Components/Task2/Movies2';
// import SlideShow from '../Components/Task2/SlideShow';
// import Root from '../Components/Task3/Root';
// // import RootComp from "../Components/Task3/componetsInteraction/RootComp";
import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Users from "../Components/Task4/Pages/Users";
// import UserDetails from "../Components/Task4/Pages/UserDetails";
// import About from "../Components/Task4/Pages/About";
// import AddUser from "../Components/Task4/Pages/AddUser";
// import UpdateUser from "../Components/Task4/Pages/UpdateUser";
// import NotFound from "../Components/Task4/Pages/NotFound";
import Header from "../Components/Task5/Components/Header";
import Users from "../Components/Task5/Pages/Users";
import { Provider, useDispatch } from "react-redux";
import store from "../Components/Task5/redux/store";
import './App.css';

function App() {
  
  
    // const addUser=(user)=>{
    //     console.log(user);
    //     // setUsers((oldUsers)=>[...oldUsers,{...user}]);
    //     axios({
    //       method: "post",
    //       url: "http://localhost:4000/users",
    //       data: user
    //     }).then(data =>{ console.log(data) 
    //       return setUsers(data)})
        
    // }
  //   const updateUser=(user)=>{
  //     console.log(user);
  //     setUsers((oldUsers)=>[...oldUsers,{...user}]);
  //     // axios({
  //     //   method: "put",
  //     //   url: "http://localhost:4000/users",
  //     //   data: user
  //     // })
  //     axios.put("http://localhost:4000/users", user);
  // }
  return (
    <Provider store={store}>
    <div className="App">
      {/* <Movies></Movies> */}
      {/* <SlideShow></SlideShow>
      <Movies2></Movies2> */}
      {/* <Root></Root> */}
      {/* <RootComp></RootComp> */}
      <BrowserRouter>
        <Header></Header>
        <Routes>
        {/* <Users></Users> */}
          <Route path="/" element={<Users></Users>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          {/* <Route path="userDetails/:userId" element={<UserDetails></UserDetails>}></Route>
          <Route path="users/add" element={<AddUser add={addUser}></AddUser>}></Route>
          <Route path="users/update/:userId" element={<UpdateUser update={updateUser}></UpdateUser>}></Route>
          <Route path="about" element={<About></About>}></Route>
          <Route path="*" element={<NotFound></NotFound>}></Route> */}
        </Routes>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
