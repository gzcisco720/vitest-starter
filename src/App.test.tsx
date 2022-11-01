import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render component', () => {
    render(<App />);
    const titleElement = screen.getByText('src/App.tsx');
    expect(titleElement).toBeInTheDocument();
  });
});
