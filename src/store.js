import thunk from "redux-thunk";
import { createStore, applyMiddleware, compose } from "redux";
import twitterReducer from "./container/TwitterContainer/reducer.TwitterContainer";

const middleware = [thunk];

const reduxDevTools = compose(applyMiddleware(...middleware));

const store = createStore(twitterReducer, reduxDevTools);

export default store;
