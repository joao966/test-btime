//Stage de teste
import React from 'react';
import {fireEvent, getByText, screen} from '@testing-library/react';
import renderWithRouterAndRedux from './services/RenderReduxAndRouter';
import App from './App';
import userEvent from '@testing-library/user-event';

describe('Page Home', () => {
  test('testa se a rota é a raiz e se a pagina possui um botão', () => {
    const { history } = renderWithRouterAndRedux(
      <App/>
    );

    expect(history.location.pathname).toBe('/');

    const button = screen.getByRole('link', {
      name: /entrar/i
    })
    expect(button).toBeDefined();
  })
})

describe('Pagina ranking', () => {
  test('testa se a pagina muda para a rota ranking', () => {
    const { history } = renderWithRouterAndRedux(
      <App />
    )

    history.push('/ranking');
    expect(history.location.pathname).toBe('/ranking');
  })
})
