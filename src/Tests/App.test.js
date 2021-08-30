//Stage de teste
import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouterAndRedux from './RenderReduxAndRouter';
import App from '../App';

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

    const Heading = screen.getByRole('heading', {
      level: 1
    })
    expect(Heading).toBeDefined();
  })
})

describe('Pagina Athleta', () => {
  test('testa se a pagina muda para a rota ranking/athletas', () => {
    const { history } = renderWithRouterAndRedux(
      <App />
    )

    history.push('/ranking/:country/athletas');
    expect(history.location.pathname).toBe('/ranking/:country/athletas');

    const Heading = screen.getByRole('heading', {
      level: 1
    })
    expect(Heading).toBeDefined();
  })
})
