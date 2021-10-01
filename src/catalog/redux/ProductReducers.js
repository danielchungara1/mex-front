import {
  PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
} from './ProductConstants';

export const productPageReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, page: action.payload };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};
