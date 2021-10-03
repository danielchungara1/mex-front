import {
  getPage
} from '../ProductApiCalls';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS
} from './ProductConstants';


export const listProductsAction = (filters = {}) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const result = await getPage(filters);    
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: result,
      filters
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error
    });
    console.log(error);
  }
};
