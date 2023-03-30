import {createStore} from "redux";
import rootReducer from "./reducers/rootReducer";
import {compose} from "redux"
const composeEnhancers=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||compose;

let store;
if (process.env.NODE_ENV==="development"){
    store= createStore(rootReducer,composeEnhancers());
}else 
store= createStore(rootReducer)




export default store;