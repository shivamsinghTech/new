

import rootReducer from "./reducers/index";
import {composeWithDevTools} from "redux-devtools-extension";

import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";

const composedEnhancer = composeWithDevTools(
   
    applyMiddleware(ReduxThunk)
    
  ) 
const store = createStore(rootReducer,composedEnhancer );

export default store;