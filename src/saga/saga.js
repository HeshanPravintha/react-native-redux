import { takeLatest, put, call } from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
} from '../redux/actions';

const API_BASE_URL = 'https://fakestoreapi.com/';

// Worker Saga: Makes the API call and dispatches success/failure actions.
function* fetchProductData() {
  try {
    const response = yield call(axios.get, `${API_BASE_URL}products`);
    const products = response.data;
    if (products && products.length > 0) {
      const randomProduct = products[Math.floor(Math.random() * products.length)];
      yield put({ type: GET_PRODUCT_SUCCESS, payload: randomProduct });
    } else {
      yield put({ type: GET_PRODUCT_FAILURE, payload: 'No products found.' });
    }
  } catch (error) {
    yield put({ type: GET_PRODUCT_FAILURE, payload: error.message });
  }
}

// Watcher Saga: Watches for the latest GET_PRODUCT_REQUEST action and calls the worker saga.
function* watchFetchProductData() {
  yield takeLatest(GET_PRODUCT_REQUEST, fetchProductData);
}

export default watchFetchProductData;
