import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducers";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

//compose 包装函数
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
