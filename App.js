import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import reducers from './src/redux/reducers';
import ProductDetails from './src/screens/ProductDetails';
import watchFetchProductData from './src/saga/saga'; // Import the Saga watcher.


// const store = createStore(reducers, applyMiddleware(thunk));
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(watchFetchProductData); // Run the Saga watcher.

const App = () => {
  return (
    <Provider store={store}>
      <ProductDetails />
    </Provider>
  );
};

export default App;
