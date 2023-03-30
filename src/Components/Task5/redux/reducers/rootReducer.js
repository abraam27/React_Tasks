import { combineReducers } from "redux";
import reducer from "./userReducer";
import productsreducer from "./productsReducer";
const rootReducer=combineReducers(
    {
        users:reducer,
        products:productsreducer
    }
)
 export default rootReducer;