import { screen } from '@testing-library/react';
import App from './App';
import React from 'react';
import renderWithRouter from './renderWithRouter';


test('renders learn react link', () => {
  renderWithRouter(<App />);
  const HomeTitle = screen.getByRole('heading', {name: /Você está na página Início/i});
  expect(HomeTitle).toBeInTheDocument();
});
