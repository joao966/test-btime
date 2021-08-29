import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import rootReducers from '../Redux/reducers';
import { createStore } from 'redux';

const renderWithRouterAndRedux = (component,
{
  state = {},
  store = createStore(rootReducers, state),
  initialRouter = ['/'],
  history = createMemoryHistory({initialRouter}),
} = {}) => {
  return {
    ...render(
      <Router history={ history }>
        <Provider store={store}>
          {component} 
        </Provider>
      </Router>
    ),
    store,
    history
  };
};

export default renderWithRouterAndRedux;
