// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NeuralBolt title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NeuralBolt/i);
    expect(titleElement).toBeInTheDocument();
});
