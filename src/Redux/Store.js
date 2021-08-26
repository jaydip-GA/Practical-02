import RootReducer from "./RootReducer";
import reduxthunk from 'redux-thunk';
import { createStore, applyMiddleware } from "redux";

const reduxThunk = reduxthunk;

const Store = createStore(RootReducer, applyMiddleware(reduxThunk));


export default Store;