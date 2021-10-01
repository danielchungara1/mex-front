import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  productPageReducer
} from './catalog/redux/ProductReducers';


const appReducer = combineReducers({
  productPage: productPageReducer,
});

// const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null;

const initialState = {
  // userLogin: { userInfo: userInfoFromStorage }
};

const rootReducer = (state, action) => {
  // if (action.type === 'USER_LOGOUT') {
  //   console.log('Logout Root Reducer');
  //   state = undefined;
  // }
  return appReducer(state, action);
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
