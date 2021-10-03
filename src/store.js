import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  productPageDefault,
  productPageReducer
} from './catalog/redux/ProductReducers';

const appReducer = combineReducers({
  productPage: productPageReducer,
});

const initialState = {
  productPage: productPageDefault
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
