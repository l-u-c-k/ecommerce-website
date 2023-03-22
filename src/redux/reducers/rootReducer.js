import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";

const rootReducer = combineReducers({
  data: loginReducer,
  productdata: productReducer,
  // cartdata:cartReducer
});
export default rootReducer;
