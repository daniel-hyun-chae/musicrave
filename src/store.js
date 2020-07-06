import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import profileReducer from './reducers/profileReducer';

// define a combined reducer`
const reducer = combineReducers({
  profile: profileReducer,
});

// create a store with reducer and add redux thunk and redux dev tool
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

// export store
export default store;
