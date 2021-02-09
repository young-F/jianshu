// import { combineReducers } from 'redux'
import { combineReducers } from "redux";
import headerReducer from "./headerReducer";
import homeReducer from "./homeReducer";
import detailReducer from "./detailReducer";
const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer,
  detail: detailReducer,
});

export default reducer;
