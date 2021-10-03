import {
  getPage
} from '../ProductApiCalls';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS
} from './ProductConstants';


export const listProductsAction = (queryParams = {}) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
      const page = await getPage(queryParams);
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: page,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error
    });
    console.log(error);
  }
};
