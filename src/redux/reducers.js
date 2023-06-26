// reducers.js
import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS,
    GET_PRODUCT_FAILURE
  } from './actions';
  
  const initialState = {
    product: null,
    loading: false,
    error: null,
  };
  
  const productReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCT_REQUEST:
        return { ...state, loading: true, error: null };
      case GET_PRODUCT_SUCCESS:
        return { ...state, product: action.payload, loading: false, error: null };
      case GET_PRODUCT_FAILURE:
        return { ...state, product: null, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default productReducer;
  