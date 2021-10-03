import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  productListDefault,
  productListReducer
} from './catalog/redux/ProductReducers';

const appReducer = combineReducers({
  productList: productListReducer,
});

const initialState = {
  productList: productListDefault
};

const rootReducer = (state, action) => {
  return appReducer(state, action);
};

const middleware = [thunk];

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
