import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../Home';

describe('Home', () => {
  test('renders a video', () => {
    render(<Home />);
    const videoElement = screen.getByRole('video');
    expect(videoElement).toBeInTheDocument();
  });
});