// App.js
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './src/redux/reducers';
import ProductDetails from './src/screens/ProductDetails';

const store = createStore(reducers, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <ProductDetails />
    </Provider>
  );
};

export default App;
