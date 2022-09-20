import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { reducerCart } from "./CartProvider/cartReducer";
const store = createStore(
  combineReducers({ reducerCart }),
  applyMiddleware(thunk)
);
export default store;
