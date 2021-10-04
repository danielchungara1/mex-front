import {
  PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS
} from './ProductConstants';

export const productListDefault = {
  result: {
    page: 1,
    totalDocs: 0,
    limit: 10
  },
  filters: {
    sort: 'description,ASC',
    page: 1,
    searchText: '',
    available: false,
    minPrice: '',
    maxPrice: ''
  },
  loading: false
}
export const productListReducer = (state = productListDefault, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { ...state, loading: true };
    case PRODUCT_LIST_SUCCESS:
      return { ...state, loading: false, result: action.payload, filters: action.filters };
    case PRODUCT_LIST_FAIL:
      return { ...state, loading: false, errorMessage: action.payload };
    default:
      return state;
  }
};
