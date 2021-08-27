//Stage de teste
import React from 'react';
import {render, screen} from '@testing-library/react'
import { BrowserRouter, Router} from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';
import {createMemoryHistory} from 'history';

describe('Page Home', () => {
  test('testa se a pagina home possui um botão', () => {
    render(
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );

    const button = screen.getByRole('link');
    expect(button).toBeInTheDocument();
  })
})

describe('Pagina ranking', () => {
  test('teste input', () => {
    const history = createMemoryHistory();

    render(
      <Router history={history}>
        <App />
      </Router>
    )

    history.push('/ranking')
    const input = screen.getByRole('textbox');
    userEvent.type(input, 'teste input');

    expect(input).toHaveValue('Teste input');
  })
})
