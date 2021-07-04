import { applyMiddleware,combineReducers,compose, createStore } from "redux";
import thunk from "redux-thunk";

import { getTable } from "./reducers/getTable";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const root=combineReducers({
        getTable,

})

const store=createStore(root,composeEnhancers(applyMiddleware(thunk)))


export default store