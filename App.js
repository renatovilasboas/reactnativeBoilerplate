import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import TodosContainer from './container/TodosContainer/index';

const initialState = {};
const store = configureStore(initialState);

const App = () => (
  <Provider store={store}>
    <TodosContainer />
  </Provider>
);

export default App;
