import {
  getPage
} from '../ProductApiCalls';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS
} from './ProductConstants';


export const listProductsAction = (_page = 1) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const page = await getPage(_page);
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
