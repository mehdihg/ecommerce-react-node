import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import thunk from "redux-thunk";
import { AuthProvider } from "./AuthProvider/AuthProvider";
import { reducerCart } from "./CartProvider/cartReducer";
const store = createStore(
  combineReducers({ reducerCart,AuthProvider }),
  applyMiddleware(thunk)
);
export default store;
