import {
  getAll
} from '../ProductApiCalls';
import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS
} from './ProductConstants';


export const listProductsAction = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });
    const products = await getAll();
    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: products,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error
    });
    console.log(error);
  }
};
