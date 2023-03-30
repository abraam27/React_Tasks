import {v4 as uuid} from "uuid";
import {GET_ALL_USERS,INCAGE,ADDUSER} from "./actionTypes"
export const getAllUsers=(data)=>({type:GET_ALL_USERS,payload:data})
export const IncrementAge=(userId)=>({type:INCAGE,payload:userId})
export const ADDUser=(user)=>({type:ADDUSER,payload:{...user,id:uuid(),age :+user.age}})

