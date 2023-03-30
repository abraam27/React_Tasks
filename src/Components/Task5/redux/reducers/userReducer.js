
import {GET_ALL_USERS,INCAGE ,ADDUSER} from "../actionTypes";
const initialState=null;
const reducer=(state=initialState,{type,payload} )=>{
//logic
// console.log(action);
switch(type){
    case GET_ALL_USERS:
        console.log(payload)
        return payload;
    case INCAGE:
        return state.map((u)=>u.id===payload?{...u,age:u.age?u.age+1:16}:u )
    case ADDUSER:
        return [...state,payload]
    default:
        return state;

}

}
export default reducer;