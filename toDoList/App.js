import React from 'react';
import AppNavigator from './src/AppNavigator';

import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux'
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
const App = () => {

  const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
return (
  <Provider store={store}>
  <AppNavigator/>
  </Provider>
)
}

export default App;
