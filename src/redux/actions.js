import axios from 'axios';

export const GET_PRODUCT_REQUEST = 'GET_PRODUCT_REQUEST';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';

const API_BASE_URL = 'https://fakestoreapi.com/';

export const fetchProductData = () => {
  return dispatch => {
    dispatch({type: GET_PRODUCT_REQUEST});

    axios
      .get(`${API_BASE_URL}products`)
      .then(response => {
        const products = response.data;
        if (products && products.length > 0) {
          const randomProduct =
            products[Math.floor(Math.random() * products.length)];
          dispatch({type: GET_PRODUCT_SUCCESS, payload: randomProduct});
        } else {
          dispatch({type: GET_PRODUCT_FAILURE, payload: 'No products found.'});
        }
      })
      .catch(error => {
        dispatch({type: GET_PRODUCT_FAILURE, payload: error.message});
      });
  };
};
